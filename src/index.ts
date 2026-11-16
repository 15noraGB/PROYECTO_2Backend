import express, { type Express, type Request, type Response } from 'express';
import { connectDb } from './config/db.ts';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

await connectDb();
app.listen(3000);