const pg = require('pg');

const config = {
  host: 'localhost',
  port: 5432,
  database: 'food_chat',
  user: 'd_war_db',
  password: '123'
};

const pool = new pg.Pool(config);
pool.on('error', (err, client) => {
  console.error(`[!] Unexpected error on idle client ${err}`);
  process.exit(-1);
});

module.exports = pool;
