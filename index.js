const express = require('express');
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.status(200).send({ status: 200, message: 'Welcome to the pokemon-api-v3', endpoints: [] });
});

app.all('/*', (req, res) => {
  res.status(404).send({ status: 404, message: 'Not Found', default: '/api' });
});

module.exports = app;
