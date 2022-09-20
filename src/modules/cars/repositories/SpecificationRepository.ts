import { Specification } from "../model/Specification";
import { ISpecificationRepositoryDTO } from "./ISpecificationRepositoryDTO";

let instance: any;

export class SpecificationRepository implements ISpecificationRepositoryDTO {
  private specifications: Specification[];

  constructor() {
    if (instance) throw new Error("You can only create one instance of Specification Repository");
    this.specifications = [];
    instance = this;
  }

  create({name, description}: {name: string, description: string}): void {
    if (this.hasSpecification(name)) throw new Error('Specification already exists');
    this.specifications.push(new Specification({name, description}));
  }

  hasSpecification(name: string): boolean {
    return this.specifications.some(specification => specification.name.toLowerCase() === name.toLowerCase());
  }
}

const singletonSpecificationRepository = Object.freeze(new SpecificationRepository());

export default singletonSpecificationRepository;