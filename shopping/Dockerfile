# syntax=docker/dockerfile:1.4
FROM node:22.15.0-bullseye-slim AS builder
WORKDIR /app/shopping

COPY package.json package-lock.json ./
RUN npm ci -- ignore-scripts --no-audit --no-progress \
    && npm cache clean --force
COPY . .
RUN npm run build

FROM node:22.15.0-bullseye-slim AS runtime
WORKDIR /app/shopping

RUN groupadd --gid 1001 appgroup \
  && useradd --uid 1001 --gid appgroup --shell /bin/sh appuser

COPY --from=builder /app/shopping ./

RUN chown -R appuser:appgroup /app/customer \
  && chmod -R 755 /app/shopping

USER appuser
EXPOSE 8003
CMD ["node", "dist/index.js"]