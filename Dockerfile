FROM  node:alpine as builder

WORKDIR /usr/src/app
COPY . .
RUN yarn install
EXPOSE 4000
CMD node index.js

