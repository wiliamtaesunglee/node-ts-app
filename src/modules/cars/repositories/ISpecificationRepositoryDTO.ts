export type SpecificationT =  {
  name: string;
  description: string;
}

export interface ISpecificationRepositoryDTO {
  create({name, description}: SpecificationT): void;
  hasSpecification(name: string): boolean;
}