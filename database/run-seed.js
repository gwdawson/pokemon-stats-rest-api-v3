const seed = require('./seed');
const database = require('./connection');

seed().then(() => database.end());
