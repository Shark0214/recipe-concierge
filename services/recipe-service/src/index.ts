import express from 'express'
import { RecipeRepo } from './infra/RecipeRepo'
import { suggestRecipes, RecipeCandidate } from '@recipe-concierge/recipe-engine'
import { db } from './db'
import { apiKey } from './middleware/apiKey'
import expressPino from 'express-pino-logger'
import { logger } from './logger'
import { collectDefaultMetrics, Registry } from 'prom-client'

const repo = new RecipeRepo(db)
const reg = new Registry()
collectDefaultMetrics({ register: reg })

export function start(port: number = Number(process.env.PORT) || 3000) {
  const app = express()
  app.use(express.json())
  app.use(expressPino({ logger }))
  app.use(apiKey)

  app.get('/metrics', async (_req, res) => {
    res.set('Content-Type', reg.contentType)
    res.end(await reg.metrics())
  })

  app.post('/suggestions', async (req, res) => {
    const items: string[] = req.body.items || []
    const n: number = req.body.n || 3
    const recipes = await repo.allByCsa((req as any).csaId)
    const candidates: RecipeCandidate[] = recipes.map(r => r.info)
    const suggestions = suggestRecipes(items, candidates, n)
    res.json(suggestions)
  })

  app.listen(port, () => {
    logger.info(`recipe-service listening on ${port}`)
  })
}

if (require.main === module) start()
