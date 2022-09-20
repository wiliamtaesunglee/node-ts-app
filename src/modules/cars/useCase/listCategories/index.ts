import singletonCategoriesRepository from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoryController";
import { ListCategoriesUseCase } from "./ListCategoryUseCase";

const listCategoriesUseCase = new ListCategoriesUseCase(singletonCategoriesRepository);

export const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

