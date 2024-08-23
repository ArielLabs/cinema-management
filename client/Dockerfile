# Use the official Node.js 20 image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Expose the port Vite serves on
EXPOSE 4173

# Start the Vite app in production mode
CMD ["npm", "run", "preview"]