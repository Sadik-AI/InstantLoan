import cors from 'cors';
import express from 'express';
import bookingRoutes from './routes/bookingRoutes.js';

export const app = express();

const allowedOrigin = process.env.FRONTEND_URL ?? 'http://localhost:3000';

app.use(
  cors({
    origin: allowedOrigin,
  }),
);
app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' });
});

app.use('/api/bookings', bookingRoutes);

app.use((_request, response) => {
  response.status(404).json({ message: 'Route not found.' });
});

// Keep a single JSON error shape so the frontend can surface clear feedback.
app.use(
  (
    error: Error,
    _request: express.Request,
    response: express.Response,
    _next: express.NextFunction,
  ) => {
    console.error(error);
    response.status(500).json({ message: 'Something went wrong on the server.' });
  },
);
