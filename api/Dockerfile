# Start from the official Node.js LTS image using Alpine Linux
FROM node:lts-alpine

# Set the working directory inside the container to /app
# All future commands will run from here
WORKDIR /app

# Copy the package.json file from your computer to the container
COPY package.json .

# Install the dependencies listed in package.json inside the container
RUN npm install

# Copy all other files from your computer to the container
COPY . .

# Document that this container listens on port 4000 (does not publish it automatically)
EXPOSE 4000

# The command to start the application
CMD ["npm", "run", "dev"]