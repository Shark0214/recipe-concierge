import { NutritionCache } from '../infra/NutritionCache';
import { NutritionCalculator } from '../domain/NutritionCalculator';

export class NutritionController {
  constructor(
    private cache: NutritionCache,
    private calculator: NutritionCalculator,
  ) {}

  getNutrition(recipeId: string, ingredients: string[]) {
    const cached = this.cache.get(recipeId);
    if (cached) return cached;
    const data = this.calculator.estimate(ingredients);
    this.cache.set(recipeId, data);
    return data;
  }
}
