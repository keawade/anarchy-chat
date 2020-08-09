import { default as express } from 'express';
import { default as chalk } from 'chalk';

import { serverRenderer } from './middleware/serverRenderer';

const HTTP_PORT: number = parseInt(process.env.PORT ?? '3000', 10);

const app = express();

app.use('/public', express.static('public'));

app.use(serverRenderer());

app.listen(HTTP_PORT, () => {
  console.log(chalk.greenBright(`listening on ${HTTP_PORT}`));
});
