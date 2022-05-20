FROM node:18-alpine

# install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i

# Copy all local files into the image.
COPY . .

#build the app
RUN npm run build

EXPOSE 3000
CMD ["node", "./build"]