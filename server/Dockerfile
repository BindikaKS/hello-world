FROM node:10
EXPOSE 9013
WORKDIR /home/bindikaks/fiddle/dev/app
COPY package.json package-lock.json /home/bindikaks/fiddle/dev/app/
RUN npm install
COPY . /home/bindikaks/fiddle/dev/app/

CMD ["npm","start"]