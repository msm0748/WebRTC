import express from 'express';
import indexRouter from './routes';
import path from 'path';
import dotenv from 'dotenv';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    mathods: ['GET', 'POST'],
  },
});

dotenv.config();

app.use(cors());
app.use('/static', express.static(path.join(process.cwd(), 'src/static')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);

io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);
  socket.on('send_message', (data) => {
    console.log(data);
    socket.broadcast.emit('receive_message', data);
  });
}); // 연결확인

server.listen(4000, () => {
  console.log('SERVER IS RUNNING');
});

// app.listen(process.env.PORT, () => {
//   console.log(`http://localhost:${process.env.PORT} start`);
// });
