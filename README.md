# WS Computer

Premium full-stack web application for a computer shop offering laptop sales, accessories, repairs, software installation, and data recovery.

## Stack

- Frontend: React + Vite + Tailwind CSS v4 + Framer Motion
- Backend: Node.js + Express + MongoDB + Mongoose
- Database notes: [`database/README.md`](./database/README.md)

## Local Setup

1. Install dependencies:
   `npm install`
2. Copy `.env.example` to `.env` and update the MongoDB connection string if needed.
3. Make sure MongoDB is running locally, or provide an Atlas connection string.
4. Start frontend and backend together:
   `npm run dev:full`
5. Open `http://localhost:3000`

## Scripts

- `npm run dev` starts the Vite frontend
- `npm run server` starts the Express API in watch mode
- `npm run dev:full` runs both together
- `npm run build` builds the frontend and compiles the backend
- `npm run start` runs the compiled backend server
- `npm run lint` type-checks frontend and backend

## Project Structure

- `frontend/` contains the React UI
- `backend/` contains the Express API and MongoDB integration
- `database/` contains the MongoDB schema notes and sample document
