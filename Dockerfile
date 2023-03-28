FROM node:16-alpine

WORKDIR /usr/src/app/client

COPY . .

RUN npm install && npm run build && npm i -g serve

RUN rm -rf node_modules

CMD ["serve", "-s", "/usr/src/app/client/dist", "-l", "8080" ]

EXPOSE 8080
