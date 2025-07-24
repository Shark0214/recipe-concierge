export function extractIngredients(text: string): string[] {
  // naive ingredient extractor: words following a quantity or bullet
  const lines = text.split(/\n/);
  const ingredients: string[] = [];
  for (const line of lines) {
    const match = line.match(/\b(?:\d+\s*[xX]?|\*)?\s*([a-zA-Z][a-zA-Z\s]+)/);
    if (match) {
      ingredients.push(match[1].trim());
    }
  }
  return ingredients;
}

export function verbNounPairs(step: string): string[] {
  const pairs: string[] = [];
  const tokens = step.split(/\s+/);
  for (let i = 0; i < tokens.length - 1; i++) {
    const verb = tokens[i].toLowerCase();
    const noun = tokens[i + 1].toLowerCase();
    if (/ing$/.test(verb) || /(chop|mix|stir|cook|bake)/.test(verb)) {
      pairs.push(`${verb} ${noun}`);
    }
  }
  return pairs;
}
