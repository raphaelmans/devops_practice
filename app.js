const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from this NodeJS app!</h1>
    <h3>I am raphael Mansueto this is my app <h3>
    <p>Updated with github actions</p>
    <div>reivison 101</div>
    <div>Last reivison!!! </div>
    <div>VERTY lasttt </div>
    <p>Try sending a request to /error and see what happens</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8080);
