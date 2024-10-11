FROM node:current-slim

WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]

HEALTHCHECK --interval=5s \
  CMD curl --fail http://ec2-98-81-222-174.compute-1.amazonaws.com:8080/ || exit 1  
