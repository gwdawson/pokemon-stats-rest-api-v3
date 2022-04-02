const database = require('./connection');
const fs = require('fs/promises');

const seed = async () => {
  await database.query('DROP TABLE IF EXISTS pokemon');
  await database.query(`
    CREATE TABLE pokemon (
    pokemon_id SERIAL PRIMARY KEY,
    pokemon_name VARCHAR NOT NULL,
    pokemon_generation INTEGER NOT NULL);`);
  await database.query("INSERT INTO pokemon (pokemon_name, pokemon_generation) VALUES ('Bulbasaur', 1);");
  await database.query("INSERT INTO pokemon (pokemon_name, pokemon_generation) VALUES ('Ivysaur', 1);");
  await database.query("INSERT INTO pokemon (pokemon_name, pokemon_generation) VALUES ('Venusaur', 1);");
  await database.query("INSERT INTO pokemon (pokemon_name, pokemon_generation) VALUES ('Charmander', 1);");
  await database.query("INSERT INTO pokemon (pokemon_name, pokemon_generation) VALUES ('Charmeleon', 1);");
  await database.query("INSERT INTO pokemon (pokemon_name, pokemon_generation) VALUES ('Charizard', 1);");
  await database.query("INSERT INTO pokemon (pokemon_name, pokemon_generation) VALUES ('Squirtle', 1);");
  await database.query("INSERT INTO pokemon (pokemon_name, pokemon_generation) VALUES ('Wartortle', 1);");
  await database.query("INSERT INTO pokemon (pokemon_name, pokemon_generation) VALUES ('Blastoise', 1);");
  const pokemon = await database.query('SELECT * FROM pokemon;');
  fs.writeFile('database/database.json', JSON.stringify(pokemon.rows, null, 2));
};

module.exports = seed;
