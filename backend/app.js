import express from 'express';
import cors from 'cors';
import './model/connection.js';
import livrosRouter from './routes/livros.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/livros', livrosRouter);

export default app;
