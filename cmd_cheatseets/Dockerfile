<<<<<<< HEAD
// Dockerfile

=======
>>>>>>> cdad75c4d8dff5eb3efca0b378200493c5d531da
FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD ["npm", "start", "serve", "build"]
