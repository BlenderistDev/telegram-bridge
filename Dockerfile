FROM node:14-alpine

RUN apk update

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

COPY src /app/src

RUN npm install
RUN npm run build

RUN mkdir /app/build/grpc/proto && cp /app/src/grpc/proto/*.js /app/build/grpc/proto

EXPOSE 50051

CMD [ "node", "./build/index.js" ]
