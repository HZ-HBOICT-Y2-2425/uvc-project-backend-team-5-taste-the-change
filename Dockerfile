FROM node:22.11.0
RUN mkdir -p /usr/src/app

EXPOSE 3011                  
COPY /code/package*.json .
RUN npm install
COPY /code .              
CMD ["bash", "-c", "npm audit && npm run dev"]