# Use the official Node.js 20 image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which the cinema server is running
EXPOSE 5000

# Define the command to run your app
CMD ["npm", "start-prod"]