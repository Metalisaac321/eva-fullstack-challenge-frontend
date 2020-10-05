FROM mhart/alpine-node:12

WORKDIR /app

ADD . /app

RUN npm install 

EXPOSE 4200

CMD npm run dev
