# 1. Use an official Node.js runtime as a base image
FROM node:18-alpine

# 2. Set the working directory in the container
WORKDIR /app

# 3. Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the application files to the container
COPY . .

# 6. Expose the port your app runs on (3000 for NestJS by default)
EXPOSE 3000

# 7. Define the command to run your app
CMD ["npm", "run", "start:dev"]
