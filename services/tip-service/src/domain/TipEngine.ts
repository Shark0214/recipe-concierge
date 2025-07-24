export class TipEngine {
  constructor(private tips: Record<string, string[]>) {}

  match(pairs: string[]): string[] {
    const results: string[] = [];
    for (const p of pairs) {
      if (this.tips[p]) results.push(...this.tips[p]);
    }
    return results;
  }
}
