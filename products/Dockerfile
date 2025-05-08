FROM node:22.15.0-bullseye

WORKDIR /app/products

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8002

CMD ["npm", "start"]