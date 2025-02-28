FROM node:22-alpine AS base

WORKDIR /home/node/app

COPY app .

RUN npm install && \
    npm run build

FROM nginx:alpine-slim

COPY --from=base /home/node/app/dist /usr/share/nginx/html
