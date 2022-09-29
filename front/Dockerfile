FROM node:16.10.0

WORKDIR /synergyway_test/front

COPY package.json /synergyway_test/front

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]
