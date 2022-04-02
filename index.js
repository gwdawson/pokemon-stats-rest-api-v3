const { defaultSuccess, defaultError } = require('./controllers/default.controller.js');
const { getAllPokemon } = require('./controllers/pokemon.controller.js');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api', defaultSuccess);

app.get('/api/pokemon', getAllPokemon);

app.all('/*', defaultError);

module.exports = app;
