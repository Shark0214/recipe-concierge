export class NutritionCalculator {
  estimate(ingredients: string[]): Record<string, number> {
    const calories = ingredients.length * 50;
    return { calories };
  }
}
