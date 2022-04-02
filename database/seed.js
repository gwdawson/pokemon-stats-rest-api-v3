const database = require('./connection');
const fs = require('fs/promises');

const seed = async () => {
  await database.query('DROP TABLE IF EXISTS pokemon');
  await database.query(`
    CREATE TABLE pokemon (
    pokedex INTEGER,
    name TEXT,
    type TEXT [],
    abilities TEXT [],
    stats TEXT []
    );`);

  await database.query(`
  INSERT INTO pokemon (pokedex, name, type, abilities, stats)
  VALUES (001, 'Bulbasaur',
  ARRAY ['Grass', 'Poison'],
  ARRAY ['Overgrow', 'Chlorophyll'],
  ARRAY ['HP 45', 'Attack 49', 'Defense 49', 'SAttack 65', 'SDefense 65', 'Speed 45', 'Total 318']
  );`);
  await database.query(`
  INSERT INTO pokemon (pokedex, name, type, abilities, stats)
  VALUES (002, 'Ivysaur',
  ARRAY ['Grass', 'Poison'],
  ARRAY ['Overgrow', 'Chlorophyll'],
  ARRAY ['HP 60', 'Attack 62', 'Defense 63', 'SAttack 80', 'SDefense 80', 'Speed 60', 'Total 405']
  );`);
  await database.query(`
  INSERT INTO pokemon (pokedex, name, type, abilities, stats)
  VALUES (003, 'Venusaur',
  ARRAY ['Grass', 'Poison'],
  ARRAY ['Overgrow', 'Chlorophyll'],
  ARRAY ['HP 80', 'Attack 82', 'Defense 83', 'SAttack 100', 'SDefense 100', 'Speed 80', 'Total 525']
  );`);

  await database.query(`
  INSERT INTO pokemon (pokedex, name, type, abilities, stats)
  VALUES (004, 'Charmander',
  ARRAY ['Fire'],
  ARRAY ['Blaze', 'Solar Power'],
  ARRAY ['HP 39', 'Attack 52', 'Defense 43', 'SAttack 60', 'SDefense 50', 'Speed 65', 'Total 309']
  );`);
  await database.query(`
  INSERT INTO pokemon (pokedex, name, type, abilities, stats)
  VALUES (005, 'Charmeleon',
  ARRAY ['Fire'],
  ARRAY ['Blaze', 'Solar Power'],
  ARRAY ['HP 58', 'Attack 64', 'Defense 58', 'SAttack 80', 'SDefense 65', 'Speed 80', 'Total 405']
  );`);
  await database.query(`
  INSERT INTO pokemon (pokedex, name, type, abilities, stats)
  VALUES (006, 'Charizard',
  ARRAY ['Fire'],
  ARRAY ['Blaze', 'Solar Power'],
  ARRAY ['HP 78', 'Attack 84', 'Defense 78', 'SAttack 109', 'SDefense 85', 'Speed 100', 'Total 534']
  );`);

  await database.query(`
  INSERT INTO pokemon (pokedex, name, type, abilities, stats)
  VALUES (007, 'squirtle',
  ARRAY ['Water'],
  ARRAY ['Torrent', 'Rain Dish'],
  ARRAY ['HP 44', 'Attack 48', 'Defense 65', 'SAttack 50', 'SDefense 64', 'Speed 43', 'Total 314']
  );`);
  await database.query(`
  INSERT INTO pokemon (pokedex, name, type, abilities, stats)
  VALUES (008, 'wartortle',
  ARRAY ['Water'],
  ARRAY ['Torrent', 'Rain Dish'],
  ARRAY ['HP 59', 'Attack 63', 'Defense 80', 'SAttack 65', 'SDefense 80', 'Speed 58', 'Total 405']
  );`);
  await database.query(`
  INSERT INTO pokemon (pokedex, name, type, abilities, stats)
  VALUES (009, 'blastoise',
  ARRAY ['Water'],
  ARRAY ['Torrent', 'Rain Dish'],
  ARRAY ['HP 79', 'Attack 83', 'Defense 100', 'SAttack 85', 'SDefense 105', 'Speed 78', 'Total 530']
  );`);

  const pokemon = await database.query('SELECT * FROM pokemon;');
  fs.writeFile('database/view-database.json', JSON.stringify(pokemon.rows, null, 2));
};

module.exports = seed;
