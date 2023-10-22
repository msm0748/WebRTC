import express from 'express';
import indexRouter from './routes';
import path from 'path';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use('/static', express.static(path.join(process.cwd(), 'src/static')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT} start`);
});
