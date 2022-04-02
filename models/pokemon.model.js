const database = require('../database/connection.js');

exports.selectAllPokemon = async (req, res) => {
  const { rows } = await database.query('SELECT * FROM pokemon;');
  return rows;
};
