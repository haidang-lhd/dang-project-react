# Project Title

A brief description of your project. This project is a React application built with Vite and TypeScript, featuring Docker support and internationalization (i18n).

## Features

*   **React 18:** Modern JavaScript library for building user interfaces.
*   **Vite:** Next-generation frontend tooling for a fast development experience.
*   **TypeScript:** Type-safe JavaScript for improved code quality and maintainability.
*   **Docker & Docker Compose:** Containerization for consistent development and deployment environments.
*   **Internationalization (i18n):** Support for multiple languages using `i18next`.
*   **ESLint:** Pluggable JavaScript linter for code quality.
*   **Vitest:** Fast unit testing framework.

## Technologies Used

*   [React](https://react.dev/)
*   [Vite](https://vitejs.dev/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Docker](https://www.docker.com/)
*   [i18next](https://www.i18next.com/)
*   [ESLint](https://eslint.org/)
*   [Vitest](https://vitest.dev/)

## Getting Started

Follow these steps to get your development environment running.

### Prerequisites

Make sure you have the following installed:

*   Node.js (LTS version recommended)
*   npm (comes with Node.js)
*   Git

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

### Running the Development Server

```bash
npm run dev
```

This will start the development server at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

```bash
npm run build
```

This command bundles the application into static files for production.

### Previewing the Production Build

```bash
npm run preview
```

This command serves the `dist` folder locally for testing your production build.

## Docker Setup

### Build and Run with Docker Compose

To build the Docker images and run the application using Docker Compose:

```bash
docker-compose up --build
```

This will start the application, typically accessible at `http://localhost:80`.

### Run Development Container

To run the development container (with hot-reloading):

```bash
docker build -f Dockerfile.dev -t your-app-dev .
docker run -p 5173:5173 -v $(pwd):/app your-app-dev
```

## Available Commands

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the app for production.
*   `npm run lint`: Lints the project files.
*   `npm run preview`: Serves the production build locally.
*   `npm test`: Runs unit tests with Vitest.

## Internationalization (i18n)

This project uses `i18next` for internationalization. Language files are located in `src/i18n/`.

*   `en.json`: English translations.
*   `vi.json`: Vietnamese translations.

To add a new language:

1.  Create a new JSON file (e.g., `es.json` for Spanish) in `src/i18n/`.
2.  Add your translations to the new JSON file.
3.  Update `src/i18n/index.ts` to include the new language.

## Testing

Unit tests are written using Vitest. To run the tests:

```bash
npm test
```
