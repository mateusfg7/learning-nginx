// simple express server with one route

import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('NODE SERVER!');
});

app.listen(process.env.PORT ?? 3000);