const knex = require('knex');
const config = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    database: 'food_chat',
    user: 'd_war_db',
    password: '123'
  },
  pool: { min: 1, max: 10 }
};

const db = knex(config);

module.exports = db;
