import { Response, Router, Request } from "express";
import { createCategoryController, listCategoriesController } from "../modules/cars/useCase";
import multer from 'multer';
import { importFileController } from "../modules/cars/useCase/importFile/inex";

const route = Router();

const upload = multer({
  dest: "./tmp",
})

route.post("/", (request: Request, response: Response) => {
  return createCategoryController.handle(request, response);
});

route.get("/list", (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response);
});

route.post('/file', upload.single('file'), (request, response) => {
  return importFileController.handle(request, response);
});

export { route as categoriesRoutes };