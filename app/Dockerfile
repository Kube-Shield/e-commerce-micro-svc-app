FROM node:22.15.0-bullseye AS runtime

WORKDIR /app

RUN groupadd --gid 1001 appgroup \
  && useradd --uid 1001 --gid appgroup --shell /bin/sh appuser

COPY package.json package-lock.json ./

RUN npm ci --production --ignore-scripts --no-audit --no-progress

COPY . .

RUN chown -R appuser:appgroup /app \
  && chmod -R 755 /app

USER appuser

EXPOSE 3000

CMD ["npm", "run", "start"]
