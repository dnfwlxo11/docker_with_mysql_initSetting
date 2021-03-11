const express = require('express');

// information
const PORT = 3000;
const HOST = '0.0.0.0';

// app
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World / test');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);