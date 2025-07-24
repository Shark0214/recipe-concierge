import { Recipe } from '../domain/Recipe';

export class RecipeRepo {
  private store = new Map<string, Recipe>();

  save(recipe: Recipe) {
    this.store.set(recipe.info.id, recipe);
  }

  find(id: string): Recipe | undefined {
    return this.store.get(id);
  }

  all(): Recipe[] {
    return Array.from(this.store.values());
  }
}
