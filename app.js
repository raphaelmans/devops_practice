const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from this NodeJS app!</h1>
    <h3>I am raphael Mansueto this is my app <h3>
    <h2>Ericka joyce antonio orejodos is the love of my life</h2>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8080);
