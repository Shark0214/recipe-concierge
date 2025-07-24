export class NutritionCache {
  private cache = new Map<string, any>();

  get(id: string) {
    return this.cache.get(id);
  }

  set(id: string, data: any) {
    this.cache.set(id, data);
  }
}
