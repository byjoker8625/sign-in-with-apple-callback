FROM node:18-alpine

ENV ENDPOINT="/oauth/apple/callback"
ENV CLIENT_ID=""

EXPOSE 3080

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "app.cjs" ]