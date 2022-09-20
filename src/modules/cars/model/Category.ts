import { v4 as uuidV4 } from 'uuid';

type CategoryT = {
  name: string;
  description: string;
}

export class Category {
  name: string;
  description: string;
  created_at: Date;
  id?: string;

  constructor({name, description}: CategoryT) {
    this.name = name;
    this.description = description;
    this.created_at = new Date();
    if (!this.id) this.id = uuidV4();
  }
}