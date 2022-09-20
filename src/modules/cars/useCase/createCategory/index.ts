import  singletonCategoriesRepository from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export const createCategoryUseCase = new CreateCategoryUseCase(singletonCategoriesRepository);

export const createCategoryController = new CreateCategoryController(createCategoryUseCase);
