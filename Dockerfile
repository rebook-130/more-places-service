# What image do you want to start building on?
FROM node:alpine

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/app

# Tell your container where your app's source code will live
WORKDIR /src/app

# What source code do you what to copy, and where to put it?
COPY . .

# Does your app have any dependencies that should be installed?
RUN npm install
RUN npm build

# What port will the container talk to the outside world with once created?
EXPOSE 3004

# How do you start your app?
CMD ["sh", "-c", "sleep 40; npm run start"]
