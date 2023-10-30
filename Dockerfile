FROM node:14-alpine

WORKDIR /app

COPY . .

EXPOSE 2004

CMD ["node", "main.js"]
