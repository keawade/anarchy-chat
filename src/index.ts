import { default as express } from 'express';

const HTTP_PORT = 8080;

const app = express();

app.get('/hello', (req, res) => {
  res.send('General Kenobi!');
});

app.listen(HTTP_PORT, () => {
  console.log(`listening on ${HTTP_PORT}`);
});
