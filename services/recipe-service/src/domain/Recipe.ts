export interface RecipeInput {
  id: string;
  title: string;
  ingredients: string[];
  prepMinutes: number;
  cookMinutes: number;
  skillLevel: number;
}

export class Recipe {
  constructor(private data: RecipeInput) {}

  totalTime() { return this.data.prepMinutes + this.data.cookMinutes; }
  ingredientIds() { return this.data.ingredients; }

  get info(): RecipeInput { return this.data; }
}
