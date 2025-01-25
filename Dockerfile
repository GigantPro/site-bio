FROM node:23-alpine3.20 as build-deps

ENV NODE_ENV production
WORKDIR /app

COPY ./site/package.json ./site/yarn.lock ./
RUN yarn install

COPY ./site/ .

RUN yarn build

CMD [ "node", ".output/server/index.mjs" ]
