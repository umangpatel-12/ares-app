FROM node:16-alpine

ENV BACKEND_URL=http://0.0.0.0:4000

# ADD ./frontend /app
COPY package.json package-lock.json ./

WORKDIR /app

RUN npm install

COPY . .

ENTRYPOINT [ "npm" ]

CMD [ "start" ]