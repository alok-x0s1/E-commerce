# LuxeBag Haven

LuxeBag Haven is a premier e-commerce platform for selling premium bags. Built using modern web technologies, this platform offers a seamless shopping experience, secure transactions, and exceptional customer service. 

## Features

- User Authentication (Sign Up, Log In, Log Out)
- Secure Password Hashing with Bcrypt
- Session Management with Express-Session
- JWT-based Authentication
- Flash Messages with Connect-Flash
- File Uploads using Multer
- Environment Variable Management with Dotenv
- Templating with EJS
- Database Operations with MongoDB and Mongoose
- Cookie Parsing

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **EJS**: Embedded JavaScript templating
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling for Node.js
- **Bcrypt**: Password hashing
- **Cookie-Parser**: Parse Cookie header and populate req.cookies
- **JWT**: JSON Web Tokens for authentication
- **Multer**: Middleware for handling multipart/form-data (file uploads)
- **Dotenv**: Load environment variables from `.env` file
- **Express-Session**: Session middleware for Express
- **Connect-Flash**: Flash messages for Express

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/alok-x0s1/LuxeBag-Haven.git
    cd LuxeBagHaven
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following variables:
    ```plaintext
    NAME=your_name
    PORT=3000
    MONGO_DB_URI=your_mongodb_connection_string
    ACCESS_TOKEN_SECRET=your_jwt_secret
    EXPRESS_SESSION_SECRET=your_session_secret
    ```

4. Run the application:
    ```bash
    npm start
    ```

## Usage

- Visit `http://localhost:3000` in your browser to access the home page.
- Sign up for a new account or log in with an existing account.
- Browse through the collection of premium bags.
- Add items to your cart and proceed to checkout.
