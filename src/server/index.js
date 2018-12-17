import express from 'express';
import { join } from 'path';

const app = express();
const appPort = process.env.APP_PORT || 3000;

app.use('/static', express.static(join(__dirname, 'static')));
app.get('*', (req, res) => res.sendFile(join(__dirname, 'static/index.html')));

// eslint-disable-next-line no-console
app.listen(appPort, () => console.log(`Listening on port ${appPort}!`));
