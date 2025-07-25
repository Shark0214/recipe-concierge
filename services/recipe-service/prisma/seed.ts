import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

async function main() {
  await db.recipe.createMany({
    data: [
      { title: 'Tomato Pasta', ingredients: ['tomato','basil','pasta'], instructions: 'Boil pasta...', csaId: 'demo-csa' },
      { title: 'Basil Pesto', ingredients: ['basil','olive oil','garlic'], instructions: 'Blend ingredients...', csaId: 'demo-csa' }
    ]
  })
}

main().finally(() => db.$disconnect())
