import express from 'express';
import { RecipeRepo } from './infra/RecipeRepo';
import { RecipeController } from './controllers/RecipeController';
import { suggestRecipes, RecipeCandidate } from '@recipe-concierge/recipe-engine';
import { RecipeInput } from './domain/Recipe';

const repo = new RecipeRepo();
const controller = new RecipeController(repo);

const sampleRecipes: RecipeInput[] = [
  {
    id: '1',
    title: 'Tomato Pasta',
    ingredients: ['tomato', 'pasta', 'basil'],
    prepMinutes: 10,
    cookMinutes: 20,
    skillLevel: 1,
  },
  {
    id: '2',
    title: 'Veggie Stir Fry',
    ingredients: ['broccoli', 'carrot', 'soy sauce'],
    prepMinutes: 15,
    cookMinutes: 10,
    skillLevel: 1,
  },
];

for (const data of sampleRecipes) {
  controller.import(data);
}

export function start(port: number = 3000) {
  const app = express();
  app.use(express.json());

  app.post('/suggestions', (req, res) => {
    const items: string[] = req.body.items || [];
    const n: number = req.body.n || 3;
    const candidates: RecipeCandidate[] = repo.all().map((r) => r.info);
    const suggestions = suggestRecipes(items, candidates, n);
    res.json({ recipes: suggestions });
  });

  app.listen(port, () => {
    console.log(`recipe-service listening on ${port}`);
  });
}

if (require.main === module) {
  start();
}
