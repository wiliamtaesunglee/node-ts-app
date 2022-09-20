import { v4 as uuidV4 } from 'uuid';

type SpecificationT = {
  name: string;
  description: string;
}

export class Specification {
  name: string;
  description: string;
  created_at: Date;
  id?: string;

  constructor({name, description}: SpecificationT) {
    this.name = name;
    this.description = description;
    this.created_at = new Date();
    if (!this.id) this.id = uuidV4();
  }
}