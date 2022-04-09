const { selectAllPokemon, selectPokemonByPokedex } = require('../models/pokemon.model.js');

exports.getAllPokemon = async (req, res) => {
  const pokemon = await selectAllPokemon();
  res.status(200).send({ status: 200, message: { pokemon } });
};

exports.getPokemonByPokedex = async (req, res) => {
  const { pokedex } = req.params;
  const pokemon = await selectPokemonByPokedex(pokedex);
  res.status(200).send({ status: 200, message: { pokemon } });
};
