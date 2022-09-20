import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoryUseCase";

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const list = this.listCategoriesUseCase.execute();
      return response.status(201).json(list);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}