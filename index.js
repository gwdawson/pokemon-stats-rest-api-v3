const { defaultSuccess, defaultError } = require('./controllers/default.controller.js');
const { getAllPokemon } = require('./controllers/pokemon.controller.js');
const favicon = require('serve-favicon');
const express = require('express');
const app = express();

app.use(express.json());

app.use(favicon(`${__dirname}/images/favicon.png`));

app.get('/api', defaultSuccess);

app.get('/api/pokemon', getAllPokemon);

app.all('/*', defaultError);

module.exports = app;
