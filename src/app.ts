import { Application, Request, Response } from 'express';
import express from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

const app: Application = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to assignment 3 server!');
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
