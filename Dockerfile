FROM node:14-alpine

WORKDIR /var/diary

COPY . .

EXPOSE 2004

VOLUME ["/var/diary"]

CMD ["node", "main.js"]
