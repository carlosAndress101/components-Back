# Use an official Node.js runtime as the base image
FROM node:latest

RUN  mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node . . 

USER node

EXPOSE 4000

CMD [ "node", "index.js" ]

