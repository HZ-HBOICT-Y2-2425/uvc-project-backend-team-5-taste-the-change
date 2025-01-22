FROM node:22.11.0
RUN mkdir -p /usr/src/app

EXPOSE 3011                  # assuming this is your server port
COPY server/package*.json .  # copy package.json and package-lock.json
RUN npm ci --only=production # install dependencies
COPY .                # copy source code
CMD ["npm", "start"]         # start the Express server