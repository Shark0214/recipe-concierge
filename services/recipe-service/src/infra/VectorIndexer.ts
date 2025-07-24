export class VectorIndexer {
  private store: Record<string, number[]> = {};

  index(id: string, vector: number[]) {
    this.store[id] = vector;
  }

  query(vector: number[]): { id: string; score: number }[] {
    const results: { id: string; score: number }[] = [];
    for (const [id, vec] of Object.entries(this.store)) {
      const score = vec.reduce((acc, v, i) => acc + v * (vector[i] || 0), 0);
      results.push({ id, score });
    }
    return results.sort((a, b) => b.score - a.score);
  }
}
