const database = require('./connection');
const fs = require('fs/promises');

const seed = async () => {
  await database.query('DROP TABLE IF EXISTS pokemon');
  await database.query('CREATE TABLE pokemon (pokemon_id SERIAL PRIMARY KEY, pokemon_name VARCHAR NOT NULL);');
  await database.query("INSERT INTO pokemon (pokemon_name) VALUES ('Bulbasaur');");
  await database.query("INSERT INTO pokemon (pokemon_name) VALUES ('Ivysaur');");
  await database.query("INSERT INTO pokemon (pokemon_name) VALUES ('Venusaur');");
  await database.query("INSERT INTO pokemon (pokemon_name) VALUES ('Charmander');");
  await database.query("INSERT INTO pokemon (pokemon_name) VALUES ('Charmeleon');");
  await database.query("INSERT INTO pokemon (pokemon_name) VALUES ('Charizard');");
  await database.query("INSERT INTO pokemon (pokemon_name) VALUES ('Squirtle');");
  await database.query("INSERT INTO pokemon (pokemon_name) VALUES ('Wartortle');");
  await database.query("INSERT INTO pokemon (pokemon_name) VALUES ('Blastoise');");
  const pokemon = await database.query('SELECT * FROM pokemon;');
  fs.writeFile('database/database.json', JSON.stringify(pokemon.rows, null, 2));
};

module.exports = seed;
