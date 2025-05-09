FROM node:16-bullseye

WORKDIR /app/customer

COPY package.json package-lock.json ./

RUN apt-get update && apt-get install -y python3 g++ make libssl-dev \
  && rm -rf /var/lib/apt/lists/*

RUN npm install --ignore-scripts --no-audit --no-progress \
    && npm cache clean --force

COPY . .

RUN groupadd --gid 1001 appgroup \
  && useradd --uid 1001 --gid appgroup --shell /bin/sh appuser

RUN chown -R appuser:appgroup /app/customer \
  && chmod -R 755 /app/customer

USER appuser

EXPOSE 8001
CMD ["node", "src/index.js"]
