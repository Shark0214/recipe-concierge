export class SubstitutionEngine {
  constructor(private rules: Record<string, string[]>) {}

  match(ingredient: string): string[] {
    return this.rules[ingredient] || [];
  }
}
