import singletonCategoriesRepository from "../../repositories/CategoriesRepository";
import { ImportFileController } from "./ImportFileController";
import { ImportFileUseCase } from "./ImportFileUseCase";

const importFileUseCase = new ImportFileUseCase(singletonCategoriesRepository);
export const importFileController = new ImportFileController(importFileUseCase);