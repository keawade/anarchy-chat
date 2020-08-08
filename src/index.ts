import { default as express } from 'express';

import { serverRenderer } from './middleware/serverRenderer';

const HTTP_PORT: number = parseInt(process.env.PORT ?? '3000', 10);

const app = express();

app.get('/hello-there', (req, res) => {
  res.send('General Kenobi!');
});

app.use(serverRenderer());

app.listen(HTTP_PORT, () => {
  console.log(`listening on ${HTTP_PORT}`);
});
