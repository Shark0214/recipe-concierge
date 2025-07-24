import { RecipeRepo } from '../infra/RecipeRepo';
import { Recipe, RecipeInput } from '../domain/Recipe';

export class RecipeController {
  constructor(private repo: RecipeRepo) {}

  getById(id: string): Recipe | undefined {
    return this.repo.find(id);
  }

  import(data: RecipeInput) {
    const recipe = new Recipe(data);
    this.repo.save(recipe);
    return recipe;
  }
}
