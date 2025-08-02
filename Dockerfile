# Development Dockerfile for Vite React app
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Start Vite development server
CMD ["npm", "run", "dev", "--", "--host"]