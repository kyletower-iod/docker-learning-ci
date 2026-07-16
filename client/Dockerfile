FROM node:lts-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# Vite uses port 5173 by default
EXPOSE 5173
# Start the server with --host so it is accessible outside the Docker container network
CMD ["npm", "run", "dev", "--", "--host"]