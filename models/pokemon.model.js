const database = require('../database/connection');

exports.selectAllPokemon = async (req, res) => {
  const { rows } = await database.query('SELECT * FROM pokemon;');
  return rows;
};
