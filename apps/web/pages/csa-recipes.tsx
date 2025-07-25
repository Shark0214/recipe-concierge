import { useState } from 'react'

const options = ['carrot','tomato','onion','spinach','broccoli']

export default function CsaRecipes() {
  const [items, setItems] = useState<string[]>([])
  const [recipes, setRecipes] = useState<any[]>([])

  const toggle = (i: string) => {
    setItems(prev => prev.includes(i) ? prev.filter(p => p !== i) : [...prev, i])
  }

  const generate = async () => {
    const r = await fetch('/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items })
    })
    setRecipes(await r.json())
  }

  return (
    <div>
      <h1>CSA Recipes</h1>
      <div>
        {options.map(o => (
          <label key={o} style={{ marginRight: '1em' }}>
            <input type="checkbox" checked={items.includes(o)} onChange={() => toggle(o)} /> {o}
          </label>
        ))}
      </div>
      <button onClick={generate}>Generate recipes</button>
      <ul>
        {recipes.map(r => <li key={r.id}>{r.title}</li>)}
      </ul>
    </div>
  )
}
