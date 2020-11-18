
FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]