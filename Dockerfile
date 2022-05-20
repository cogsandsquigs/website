FROM node:18-alpine

# install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i

# copy all local files into the image.
COPY . .

# build the app
RUN npm run build

# set the port 
ENV PORT=8080

EXPOSE 8080
CMD ["node", "./build"]