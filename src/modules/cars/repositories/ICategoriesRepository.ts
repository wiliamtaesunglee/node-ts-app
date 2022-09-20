import { Category } from "../model/Category";

export type CreateCategory =  {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create({name, description}: CreateCategory): void;
  list(): Category[];
  hasCategory(name: string): boolean;
  hasNotCategory(name: string): boolean;
  findByName(name: string): Category | undefined;
}