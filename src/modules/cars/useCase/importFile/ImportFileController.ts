import { Request, Response } from "express";
import { ImportFileUseCase } from "./ImportFileUseCase";

export class ImportFileController {
  constructor(private importFileUseCase: ImportFileUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    const result = await this.importFileUseCase.execute({file, request, response});
    return result;
  }
}