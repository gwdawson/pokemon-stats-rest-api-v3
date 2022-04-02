const { selectAllPokemon } = require('../models/pokemon.model.js');

exports.getAllPokemon = async (req, res) => {
  const pokemon = await selectAllPokemon();
  res.status(200).send({ status: 200, message: { pokemon } });
};
