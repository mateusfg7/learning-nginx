// simple express server with one route

import path from 'path'
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./index.html'));
});

app.listen(3000, () => {
  console.log(`Node server is running!`);
});