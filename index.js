// Require Express
const express = require('express');

const PORT = process.env.PORT || 5000;

// Set App Variable
const app = express();

app.use('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(PORT);
