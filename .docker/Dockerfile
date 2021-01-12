
FROM node:12

# This is how Docker will pass in secrets and various
# runttime configurations to the application.
ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY .. .

# First, it bypasses the package.json's start command and reduce the number
# of processes running inside the container. Second it causes exit
# signals such as SIGTERM and SIGINT to be received by the Node.js
# process instead of npm eating them up.
CMD [ "node", "index.js" ]