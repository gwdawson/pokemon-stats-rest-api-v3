const { defaultSuccess, defaultError } = require('./controllers/default.controller.js');
const { getAllPokemon } = require('./controllers/pokemon.controller.js');
const favicon = require('serve-favicon');
const express = require('express');
const fs = require('fs/promises');
const app = express();

app.use(express.json());

app.use(favicon(`${__dirname}/images/favicon.png`));

app.use((req, res, next) => {
  const { method, originalUrl } = req;
  const data = `A (${method}) request was made to (${originalUrl}) at ${new Date()}\n`;
  fs.appendFile(`./logs/request.log`, data).then(() => next());
});

app.get('/api', defaultSuccess);

app.get('/api/pokemon', getAllPokemon);

app.all('/*', defaultError);

module.exports = app;
