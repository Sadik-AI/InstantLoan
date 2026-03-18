import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { app } from './app.js';
import { connectDatabase } from './config/db.js';

dotenv.config();

const port = Number(process.env.PORT ?? 5000);

async function startServer() {
  await connectDatabase();

  app.listen(port, () => {
    console.log(`WS Computer API running on http://localhost:${port}`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start server', error);
  process.exit(1);
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  process.exit(0);
});
