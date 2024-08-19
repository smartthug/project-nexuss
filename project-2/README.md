# React Signup and Login with OTP Verification

This project is a user authentication system that includes signup with OTP verification and login functionality. The frontend is built with React, and the backend is developed using Express, Node.js, and MongoDB. The project also includes my own API for user registration, OTP verification, and login. Nodemailer is used to send OTP emails.

**Visit** **My** **Frontend** **Output** **Here** - (https://project-2-signup-login-with-auth.onrender.com)
## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration with OTP verification
- OTP sent via email using Nodemailer
- User login
- JWT authentication
- Responsive design with Neumorphism
- Form validation

## Tech Stack

**Frontend:**

- React
- Axios
- CSS (Neumorphism design)

**Backend:**

- Express
- Node.js
- MongoDB
- Mongoose
- Nodemailer
- JWT


## Installation

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
2. Install backend dependencies:
   ```bash
   npm install
 3.Create a .env file in the backend directory and add the following variables:
 - MONGO_URI=your_mongo_db_uri
 - JWT_SECRET=your_jwt_secret
 - EMAIL_HOST=your_email_host
 - EMAIL_PORT=your_email_port
 - EMAIL_USER=your_email_user
 - EMAIL_PASS=your_email_password
   

4.Start the backend server:
npm start


### Frontend Setup

1.Navigate to the frontend directory:

    ```bash
    cd frontend

2.Install frontend dependencies:

    ```bash
    npm install

3.Start the frontend development server:

```bash
npm start



