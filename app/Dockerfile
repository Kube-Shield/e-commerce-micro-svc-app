FROM node:22.15.0-bullseye

WORKDIR /app/

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

ENV NODE_OPTIONS=--openssl-legacy-provider


CMD ["npm", "start"]
