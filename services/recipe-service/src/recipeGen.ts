import { normalize } from '@recipe-concierge/food-normaliser'
import { Recipe } from '@recipe-concierge/recipe-types'
import { randomUUID } from 'crypto'

async function fetchSpoonacular(items: string[]): Promise<Recipe[]> {
  const key = process.env.SPOONACULAR_KEY
  if (!key) return []
  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(items.join(','))}&number=5&apiKey=${key}`
  const res = await fetch(url)
  if (!res.ok) return []
  const data = await res.json()
  return (data as any[]).map((r) => ({
    id: randomUUID(),
    title: r.title,
    servings: r.servings || 2,
    readyInMinutes: r.readyInMinutes || 30,
    ingredients: (r.usedIngredients || []).map((i: any) => ({ name: i.name, quantity: `${i.amount} ${i.unit}` })),
    instructions: [],
    missingItems: (r.missedIngredients || []).map((m: any) => m.name),
    nutrition: { calories: 0, protein_g: 0, carbs_g: 0, fat_g: 0 },
    source: 'spoonacular'
  }))
}

async function fetchOpenAI(items: string[], servings?: number): Promise<Recipe[]> {
  const key = process.env.OPENAI_API_KEY
  if (!key) return []
  const prompt = `Create one recipe using ${items.join(', ')}. Respond with JSON.`
  const body = {
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7
  }
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`
    },
    body: JSON.stringify(body)
  })
  if (!res.ok) return []
  const json = await res.json()
  const text = json.choices?.[0]?.message?.content
  if (!text) return []
  try {
    const r = JSON.parse(text)
    return [Object.assign(r, { id: randomUUID(), source: 'openai' })]
  } catch {
    return []
  }
}

export async function generateRecipes(items: string[], opts?: { servings?: number }): Promise<Recipe[]> {
  const normalized = items.map(normalize)
  const spoon = await fetchSpoonacular(normalized)
  if (spoon.length) return spoon
  return await fetchOpenAI(normalized, opts?.servings)
}
