FROM node:20

WORKDIR /app

COPY package*.json ./

ENV PORT=3000

RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]