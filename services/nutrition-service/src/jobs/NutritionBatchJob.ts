export class NutritionBatchJob {
  constructor(private updater: (id: string, data: any) => void) {}

  run(recipes: { id: string; ingredients: string[] }[]) {
    for (const r of recipes) {
      const calories = r.ingredients.length * 50;
      this.updater(r.id, { calories });
    }
  }
}
