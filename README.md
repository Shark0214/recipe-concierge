# Recipe Concierge

This monorepo contains the demo "Recipe Concierge" stack.
Front-end widgets live under `apps/`, backend services under `services/` and shared code in `libs/`.

![diagram](docs/ARCHITECTURE.md)

## Quickstart

```bash
pnpm install
docker compose up -d
```

Then POST `http://localhost:3000/suggestions` with a JSON body
`{"items":["tomato","basil"]}` and include the bundled widget on any page.
