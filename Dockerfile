# Stage 1: Build the React application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine AS runner

# Copy the build output from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# The default nginx command will start the server
CMD ["nginx", "-g", "daemon off;"]
