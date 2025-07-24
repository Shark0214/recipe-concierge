export class FeedCache {
  private cache = new Map<string, string[]>();

  set(userId: string, recipeIds: string[]) {
    this.cache.set(userId, recipeIds);
  }

  get(userId: string): string[] | undefined {
    return this.cache.get(userId);
  }
}
