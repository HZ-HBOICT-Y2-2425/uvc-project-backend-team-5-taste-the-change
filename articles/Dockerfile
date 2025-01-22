FROM node:22.11.0
RUN mkdir -p /usr/src/app

EXPOSE 3011                  
COPY ./articles/code/package*.json ./
RUN npm ci --only=production
COPY ./articles/code .              
CMD ["bash", "-c", "npm audit && npm run dev"]