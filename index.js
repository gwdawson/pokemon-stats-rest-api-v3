const { defaultSuccess, defaultError } = require('./controllers/default.controller.js');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api', defaultSuccess);

app.all('/*', defaultError);

module.exports = app;
