FROM node:alpine as builder
WORKDIR '/sample-counter-app-with-aws'
COPY . .
RUN npm install
# lets build the application
RUN npm run build
FROM nginx
EXPOSE 80
COPY --from=builder /sample-counter-app-with-aws/build /usr/share/nginx/html