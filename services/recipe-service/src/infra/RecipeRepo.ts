import { PrismaClient, Recipe as RecipeModel } from '@prisma/client'
import { Recipe, RecipeInput } from '../domain/Recipe'

export class RecipeRepo {
  constructor(private db: PrismaClient) {}

  async save(recipe: Recipe) {
    const data = recipe.info
    await this.db.recipe.create({ data })
  }

  async find(id: string): Promise<Recipe | undefined> {
    const r = await this.db.recipe.findUnique({ where: { id } })
    return r ? new Recipe(r as RecipeInput) : undefined
  }

  async allByCsa(csaId: string): Promise<Recipe[]> {
    const rows = await this.db.recipe.findMany({ where: { csaId } })
    return rows.map(r => new Recipe(r as RecipeInput))
  }
}
