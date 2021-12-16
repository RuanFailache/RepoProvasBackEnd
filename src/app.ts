import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connectDatabase from './database';

const app = express();
app.use(express.json());
app.use(cors());

export async function init() {
  await connectDatabase();
}

export default app;