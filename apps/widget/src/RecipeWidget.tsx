import { useState } from 'react'

export function RecipeWidget({ csaKey }: { csaKey: string }) {
  const [items, setItems] = useState('')
  const [recipes, setRecipes] = useState<any[]>([])

  const fetchRecipes = async () => {
    const r = await fetch(import.meta.env.VITE_API_URL + '/suggestions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': csaKey
      },
      body: JSON.stringify({ items: items.split(',').map(s => s.trim()) })
    })
    setRecipes(await r.json())
  }

  return (
    <div className="rc-widget border p-3 rounded">
      <h3 className="font-bold mb-2">Recipe Concierge</h3>
      <input value={items} onChange={e => setItems(e.target.value)}
             placeholder="e.g. tomato, basil" className="border px-2 py-1 w-full"/>
      <button onClick={fetchRecipes} className="mt-2 px-3 py-1 border rounded">Suggest!</button>
      <ul className="list-disc ml-4 mt-3">
        {recipes.map(r => <li key={r.id}><b>{r.title}</b></li>)}
      </ul>
    </div>
  )
}
