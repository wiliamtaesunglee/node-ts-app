import fs from 'fs';
import { parse } from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { Request, Response } from 'express';

type CategoriesT = {
  name: string;
  description: string;
}

export class ImportFileUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({file, request, response}:
    {
      file: Express.Multer.File | undefined, 
      request: Request, 
      response: Response
    }): Promise<Response> {
    if (file) {
      const rejectedList: any[] = [];
      try {
        const categories = await this.loadCategoriesOnFile(file);
        categories.forEach((category) => {
          const fieldsValidation = category.name && category.description &&
            this.categoriesRepository.hasNotCategory(category.name);
          if (fieldsValidation) this.categoriesRepository.create(category);
          else rejectedList.push({...category, reason: 'already exists'})
        });
        return response.status(200).json({rejected: rejectedList});
      } catch(error) {
        console.log(error)
        return response.status(400).json(error)
      }
    } else return response.status(400).json('empty file');
  }

  loadCategoriesOnFile(file: Express.Multer.File): Promise<CategoriesT[]> {
    return new Promise((resolve, reject) => {
      const categories: any = []; 
      const parser = fs.createReadStream(file.path)
        .pipe(parse({ columns: true, relax_quotes: true, escape: '\\', ltrim: true, rtrim: true }))
        .on('data', (row) => {
          const {name, description} = row;
          categories.push({
            name, 
            description
          });
        });

      parser.on('error', function(err: { message: any; }) {
        console.error(err.message);
      });
      
      parser.on('end', function() {
        fs.promises.unlink(file.path)
        resolve(categories)
      });
    });
  }
}
