export interface Recipe {
  id: string;
  title: string;
  servings: number;
  readyInMinutes: number;
  ingredients: Array<{ name: string; quantity: string }>;
  instructions: string[];
  missingItems: string[];
  nutrition: {
    calories: number;
    protein_g: number;
    carbs_g: number;
    fat_g: number;
  };
  source: 'spoonacular' | 'openai';
}
