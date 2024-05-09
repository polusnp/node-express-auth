# User Management System CRUD RESTful API

npm start
npm run dev

This is a simple RESTful API built with Express.js for managing users and movies. It provides endpoints for user authentication, user management, and movie management.

## Features

-   User registration and login with JWT authentication
-   CRUD operations for users
-   Fetching all movies and retrieving a single movie by ID

## Requirements

-   Node.js
-   MongoDB

## Technologies Used

-   **Node.js**: A JavaScript runtime environment for running server-side JavaScript code.
-   **Express.js**: A web application framework for Node.js used for building APIs and web applications.
-   **MongoDB**: NoSQL database used for storing movie and user data.
-   **Mongoose**: MongoDB object modeling tool for Node.js, used for schema validation and interaction with the MongoDB database.
-   **Joi**: A powerful schema description language and data validator for JavaScript.
-   **JSON**: A lightweight data interchange format used for representing data in API requests and responses.
-   **Git**: A version control system used for tracking changes in the project's source code.
-   **GitHub**: A platform for hosting Git repositories and collaborating on software development projects.

## Access the API endpoints using a tool like Postman or cURL:

User authentication: POST /auth/login, POST /auth/register
User management: GET /users, GET /users/current
Movie management: GET /movies, GET /movies/:id

## Project Structure

markdown
Copy code

-   src/
    -   controllers/
        -   authController.js
        -   moviesController.js
        -   usersController.js
    -   dataBase/
        -   connectionMongoDb.js
    -   errorHandlers/
        -   globalErrorHandler.js
        -   notFoundErrorHandler.js
    -   middlewares/
        -   authGuard.js
        -   usersValidations.js
    -   model/
        -   userModel.js
    -   routes/
        -   authRouter.js
        -   moviesRouter.js
        -   usersRouter.js
    -   services/
        -   authService.js
        -   moviesService.js
        -   userService.js
-   .env.example
-   .gitignore
-   package.json
-   server.js

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or found any issues, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
