#stage 0
FROM node:10 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

#stage 1
FROM nginx:1.15.6-alpine
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/