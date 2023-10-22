import { RequestHandler } from 'express';

const getMainPage: RequestHandler = (req, res) => {
  res.send('Hello World!');
};

export default { getMainPage };
