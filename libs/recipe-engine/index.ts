export interface RecipeCandidate {
  id: string;
  title: string;
  ingredients: string[];
}

export function suggestRecipes(
  items: string[],
  recipes: RecipeCandidate[],
  n: number = 3
): RecipeCandidate[] {
  const scores = recipes.map((r) => {
    const score = r.ingredients.reduce(
      (sum, ing) => sum + (items.includes(ing) ? 1 : 0),
      0
    );
    return { recipe: r, score };
  });
  return scores
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((s) => s.recipe);
}
