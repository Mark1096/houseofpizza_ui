# Use the official Node.js runtime as the base image
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/build /usr/share/nginx/html

# Use a script to replace variables at runtime
COPY ./set-env.sh /docker-entrypoint.d/

# Copy the config.js script for entering the default ip enhancement for the api server
COPY ./config.js /usr/share/nginx/html/config.js

# Modification to the set-env.sh file for assigning execution permissions
RUN chmod +x /docker-entrypoint.d/set-env.sh

# Expose port 80 for the Nginx server
EXPOSE 80

# Run Nginx server
CMD ["nginx", "-g", "daemon off;"]