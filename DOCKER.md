# Docker Setup Guide

This document provides instructions on how to use Docker to run this project in both development and production environments.

## Files

- `Dockerfile`: A multi-stage Dockerfile used for building the production-ready application. It creates a lean Nginx image that serves the optimized static build of the React app.

- `Dockerfile.dev`: A Dockerfile for the development environment. It sets up a Node.js container with all the necessary dependencies and runs the Vite development server, enabling features like hot-reloading.

- `docker-compose.yml`: A configuration file for Docker Compose that allows you to easily manage both development and production environments. It defines two services: `dev` and `prod`.

- `.dockerignore`: This file specifies which files and directories should be excluded from the Docker build context to speed up the build process and create smaller images.

## How to Run

### Development Mode

To start the application in development mode with hot-reloading enabled, run the following command:

```bash
docker-compose up dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

Any changes you make to the files in the `src` directory will automatically trigger a reload in the browser.

### Production Mode

To build the production image and run the container, use the following command:

```bash
docker-compose up prod
```

The application will be available at [http://localhost:8080](http://localhost:8080).

### Building Manually

You can also build the Docker images manually without using Docker Compose.

**Development Image**

To build the development image, use the following command:

```bash
docker build -t my-react-app-dev -f Dockerfile.dev .
```

**Production Image**

To build the production image, use this command:

```bash
docker build -t my-react-app-prod .
```

### Stopping the Application

To stop the running services, you can use the following command:

```bash
docker-compose down
```
