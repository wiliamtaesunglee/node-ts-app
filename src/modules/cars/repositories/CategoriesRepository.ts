import { Category } from "../model/Category";
import { CreateCategory, ICategoriesRepository } from "./ICategoriesRepository";

let categoriesInstance: any;

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    if (categoriesInstance) {
      throw new Error('You can only create one instance of Categories Repository')
    }
    this.categories = [];
    categoriesInstance = this;
  }

  create({name, description}: CreateCategory): void {
    if (this.hasCategory(name)) throw new Error('Category already exists');
    this.categories.push(new Category({name, description}));
  }

  list(): Category[] {
    return this.categories
  }

  hasCategory(name: string): boolean {
    return this.categories.some(category => category.name.toLowerCase() === name.toLowerCase());
  }

  hasNotCategory(name: string): boolean {
      return !this.hasCategory(name);
  }

  findByName(name: string): Category | undefined {
    let response;
    if (this.hasCategory(name)) {
      response = this.categories.find(category => category.name.toLowerCase() === name.toLowerCase());
    }
    return response
  }
}

const singletonCategoriesRepository = Object.freeze(new CategoriesRepository());

export default singletonCategoriesRepository;