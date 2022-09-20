import { Response, Router, Request } from "express";
import { createSpecificationController } from "../modules/cars/useCase";

const route = Router();

route.post("/", (request: Request, response: Response) => {
  return createSpecificationController.handle(request, response);
});

export { route as specificationRoutes };