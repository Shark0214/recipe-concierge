export class SubstitutionRepo {
  private store = new Map<string, string[]>();

  find(ingredient: string): string[] {
    return this.store.get(ingredient) || [];
  }

  save(ingredient: string, substitutes: string[]) {
    this.store.set(ingredient, substitutes);
  }
}
