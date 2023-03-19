FROM node:18-alpine as base
WORKDIR /usr/src/app
COPY package*.json ./

FROM base as dev
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

FROM dev as build
RUN npm run build

FROM nginx:latest as prod
WORKDIR /app
COPY --from=build /usr/src/app/out ./static
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
