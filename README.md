# CRUD API Application - README

## Overview

This project is a backend application built with **Express.js** and **TypeScript** for simple CRUD operations. It features robust error handling, validation, and a connection to a **MongoDB** database. The application uses **Sentry** for error monitoring and profiling, and it includes additional tools for ensuring code quality like **ESLint** and **Jest** for testing.

## Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (>= 14.x)
- **npm** (>= 6.x)
- **MongoDB**

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd crud_api_tutorial
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Environment setup**:
   Create environment files named `.env.development` and `.env.production` in the root directory, following the existing templates provided in the repository.

## Environment Variables

Ensure you have the following environment variables set in your `.env.*` files:

| Variable       | Description                     |
| -------------- | ------------------------------- |
| `PORT`         | Port number for the server      |
| `MONGO_DB_URL` | URL for connecting to MongoDB   |
| `SENTRY_DSN`   | Sentry DSN for error monitoring |

Example `.env.development`:

```dotenv
PORT=4200
MONGO_DB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/CRUD_Node_Tutorial
SENTRY_DSN=https://<sentry-key>@o4508052301807616.ingest.de.sentry.io/4508052307443792
```

## Scripts

The following scripts are available in **package.json**:

- `npm run dev` - Runs the server in development mode with hot reloading.
- `npm run prod` - Starts the application in production mode using `tsx`.
- `npm run lint` - Runs **ESLint** to check for code quality issues.
- `npm run lint:fix` - Fixes automatically-fixable issues using **ESLint**.

## Running the Application

1. **Development Mode**:

   ```bash
   npm run dev
   ```

   The server will be accessible at `http://localhost:<PORT>`.

2. **Production Mode**:
   ```bash
   npm run prod
   ```

## Folder Structure

- `/src`: Contains the TypeScript source code.
  - `/app.ts`: Main server file where routes and middlewares are configured.
  - `/config`: Contains configuration files, including environment setup.
  - `/controllers`: Handles incoming requests and returns responses.
  - `/middlewares`: Contains request processing middlewares.
  - `/routes`: Defines different application routes.
  - `/utils`: Utility functions like error handling and request validation.

## Features

1. **TypeScript**: Type safety for all the code.
2. **MongoDB Integration**: Uses **Mongoose** to interact with a MongoDB database.
3. **Sentry Integration**: Tracks errors and performance metrics.
4. **Error Handling**: Custom error classes (`HttpError`) and middlewares.
5. **Validation**: Body validation with **Joi**.
6. **Express Promises**: Using **express-promise-router** for cleaner async routing.

## Linting and Testing

- **ESLint**: For code quality and consistency. Run `npm run lint`.
- **Jest**: Unit testing framework. Tests are located under `/src/**/*.test.ts`.

## Example Routes

The API has the following key routes:

- **/health/test**: A simple health check endpoint to verify that the server is running.

## Contributions

Contributions are welcome! Please make sure to run linting and tests before submitting a pull request.

## License

This project is licensed under the **ISC** license.

## Author

Created by **leonovserhii89@gmail.com**.
