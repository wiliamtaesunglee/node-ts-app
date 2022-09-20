import { ISpecificationRepositoryDTO } from "../../repositories/ISpecificationRepositoryDTO";

export class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepositoryDTO) {}

  execute({ name, description }: {name: string, description: string}) {
    return this.specificationRepository.create({ name, description });
  }
}