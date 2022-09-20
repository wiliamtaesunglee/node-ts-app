import singletonSpecificationRepository from "../../repositories/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const createSpecificationUseCase = new CreateSpecificationUseCase(singletonSpecificationRepository);

export const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);
