# Architecture

The stack consists of a single `recipe-service` backed by a Postgres database and an embeddable web widget.
Requests flow from the widget -> recipe-service -> database.

```mermaid
sequenceDiagram
    participant Widget
    participant API as recipe-service
    participant DB as Postgres
    Widget->>API: POST /suggestions
    API->>DB: query recipes for CSA
    API-->>Widget: JSON suggestions
```

Run everything locally with `docker compose up` then include `dist/recipe-widget.umd.cjs` on any page.
