# Getting Started

This project uses a workspace layout with libraries in `libs/` and services in `services/`.

To try the sample recipe suggestion service:

```bash
pnpm install
pnpm --filter @recipe-concierge/recipe-service start
```

Then POST a JSON body like `{ "items": ["tomato", "basil"], "n": 2 }` to `http://localhost:3000/suggestions`.
