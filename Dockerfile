FROM node:18-alpine as base
ENV CONTAINER=true
WORKDIR /usr/src/app
COPY package*.json ./

FROM base as dev
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

FROM dev as build
ENV BUILD_STAGE=build
RUN npm run build
CMD ["npm", "run", "start"]

# uncomment the following lines to serve static assets separately
# FROM build as static
# RUN npm run export
# CMD ["npm", "run", "export"]

# FROM nginx:latest as serve
# WORKDIR /app
# COPY --from=static /usr/src/app/out ./static
# COPY ./nginx.conf /etc/nginx/nginx.conf
# EXPOSE 8080
