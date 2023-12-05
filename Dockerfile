FROM node:21-alpine3.18 AS base
LABEL authors="Nico"

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM node:21-slim

WORKDIR /app

COPY --from=base /app/dist ./dist
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json

EXPOSE $PORT

CMD npm run $SCRIPT

