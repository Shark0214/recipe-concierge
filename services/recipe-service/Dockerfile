FROM node:20-slim
WORKDIR /app
COPY . .
RUN corepack enable && corepack prepare pnpm@9.3.0 --activate
RUN pnpm install --prod
ENV NODE_ENV=production
CMD ["pnpm","start"]
