const database = require('../database/connection');

exports.selectAllPokemon = async () => {
  const { rows } = await database.query('SELECT * FROM pokemon;');
  return rows;
};

exports.selectPokemonByPokedex = async (id) => {
  const { rows } = await database.query('SELECT * FROM pokemon WHERE pokedex = $1;', [id]);
  return rows[0];
};
