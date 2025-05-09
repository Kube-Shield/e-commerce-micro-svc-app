FROM node:22.15.0-bullseye

WORKDIR /app/products

COPY package.json package-lock.json ./

RUN npm ci --ignore-scripts --no-audit --no-progress \
    && npm cache clean --force

COPY . .

RUN groupadd --gid 1001 appgroup \
  && useradd --uid 1001 --gid appgroup --shell /bin/sh appuser

RUN chown -R appuser:appgroup /app/products \
  && chmod -R 755 /app/products

USER appuser

EXPOSE 8002
CMD ["node", "src/index.js"]