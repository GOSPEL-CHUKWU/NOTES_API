import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/dbConnection.js';

const startServer = async () => {
  // load environment variables
  dotenv.config({
    path: './.env',
  });

  // check if PORT is defined
  const PORT = process.env.PORT || 4040;

  // connect to database
  await connectDB();

  // create express app
  const app = express();

  // routes
  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  app.get('/health', (req, res) => {
    res.send('60%');
  });

  // start server
  app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
  });
};

startServer();
