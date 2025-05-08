# syntax=docker/dockerfile:1.4

FROM node:22.15.0-bullseye-slim AS builder
WORKDIR /app/products

COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-progress && npm cache clean --force
COPY . .

FROM node:22.15.0-bullseye-slim AS runtime
WORKDIR /app/products

RUN groupadd --gid 1001 appgroup && \
useradd --uid 1001 --gid appgroup --shell /bin/sh appuser

COPY --from=builder /app/products ./

RUN chown -R appuser:appgroup /app/products && \
chmod -R 755 /app/products

USER appuser

EXPOSE 8002
CMD ["npm", "start"]
