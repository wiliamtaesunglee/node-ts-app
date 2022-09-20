import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;
    try {
      this.createSpecificationUseCase.execute({name, description});
    } catch (e) {
      return response.status(400).json(e);
    }
    return response.status(201).send();
  }
}