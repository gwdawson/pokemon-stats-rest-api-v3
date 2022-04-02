const { Pool } = require('pg');

const ENV = process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `${__dirname}/.env.${ENV}`,
});

if (!process.env.PGDATABASE) {
  throw new Error('PGDATABASE environment variable not set');
}

const database = new Pool();

module.exports = database;
