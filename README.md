# Authentication App

This project is a full-stack authentication application built with React (frontend) and Express.js (backend). It demonstrates user registration, login, and protected routes.

## Project Structure

The project is divided into two main parts:

- `frontend/`: React application
- `backend/`: Express.js application

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB

## Installation

1. Clone the repository:
   ```
   git clone <https://github.com/geektj/infloso-main>
   cd infloso-main
   ```

2. Install backend dependencies:
   ```
   cd ./backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ./frontend
   npm install
   ```

## Configuration

1. Backend configuration:
   - Create a `.env` file in the `backend/` directory
   - Add the following environment variables:
     ```
     PORT=8000
     MONGODB_URL=<your-mongodb-connection-string>
     JWT_SECRET=<your-jwt-secret>
     JWT_EXPIRE=24h
     ```

2. Frontend configuration:
   - Update the API base URL in the frontend code if necessary (currently set to `http://localhost:3000`)

## Running the Application

1. Start the backend server:
   ```
   cd backend
   npm run dev
   ```
   The backend will run on http://localhost:8000

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm start
   ```
   The frontend will run on http://localhost:3000

## Features

- User registration
- User login
- Protected routes
- JWT authentication
- Logout functionality
- CORS configuration

## API Routes

- POST `/api/auth/register`: User registration
- POST `/api/auth/login`: User login
- POST `/api/auth/logout`: User logout

## Built With

### Backend:
- Express.js
- MongoDB with Mongoose
- JSON Web Token (JWT)
- bcryptjs for password hashing
- cors for Cross-Origin Resource Sharing

### Frontend:
- React
- Axios for API requests


