import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

type RequestT = {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: RequestT) {
    return this.categoriesRepository.create({name, description});
  }
}