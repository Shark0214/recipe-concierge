import { Request, Response, NextFunction } from 'express'

const VALID = new Map<string, string>([['demo-key','demo-csa']])

export function apiKey(req: Request, res: Response, next: NextFunction) {
  const key = req.headers['x-api-key'] as string | undefined
  const csaId = key && VALID.get(key)
  if (!csaId) return res.status(401).json({ error: 'Invalid API key' })
  ;(req as any).csaId = csaId
  next()
}
