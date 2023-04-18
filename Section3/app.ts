const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('oh shit its next');
  next();
});

app.use((req, res, next) => {
  console.log('oh shit its another next');
});
const server = http.createServer(app);

server.listen(3000);
