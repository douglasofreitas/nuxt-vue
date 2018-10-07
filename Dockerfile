FROM node:10

WORKDIR /home/app

COPY ./src/package.json /home/app
COPY ./src/package-lock.json /home/app
RUN npm install --silent --no-progress

COPY ./src /home/app
RUN npm run build

#ENV HOST 0.0.0.0
#EXPOSE 3000

CMD ["npm", "run", "start"]