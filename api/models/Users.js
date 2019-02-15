const db = require('../db');
const bcrypt = require('bcryptjs');

class Users {
  constructor(json) {
    if (json !== undefined && json !== null) {
      this.id = json.id || null;
      this.username = json.username || null;
      this.avatarUrl = json.avatarUrl || null;
      this.email = json.email || null;
      this.password = json.password || null;
      this.firstname = json.firstname || null;
      this.createdAt = json.createdAt || null;

      this.all = [this.username, this.avatarUrl, this.password, this.email];
    }
  }

  async login() {
    console.log('[User DAO: login]');
    const client = db.connect();
    let query = 'select * from users where lower(email) = lower($1)';

    try {
      let result = await client.query(query, [this.email]);

      if (!result.rows || result.rows.length === 0) {
        console.log('[!] User does not exists');
        client.release();

        return null;
      } else {
        const match = await bcrypt.compare(this.password, result.rows[0].password);

        if (match) {
          await client.release();

          return result.rows[0];
        }
      }
    } catch (error) {}
  }

  async save() {
    console.log('[User DAO: save()]');

    const client = await db.connect();
    let query;
    let result;
    let values;

    try {
      const hash = await bcrypt.hash(this.password, 12);
      // Check if user not exists already
      query = 'select email from users where email = $1';
      result = await client.query(query, [this.email]);

      if (!result.rows[0] || result.rows.length === 0) {
        query = 'insert into users (email, password, created_at';
        values = ') values ($1, $2, current_timestamp';

        query = `${query}${values}) returning *`;
        result = await client.query(query, [this.email, hash]);

        return result.rows[0];
      } else {
        console.log('[User exists already]');
        await client.release();
        return null;
      }
    } catch (err) {
      console.log(`Error saving data ${err}`);
      await client.release();
    }
  }

  static async get(id) {
    console.log('[!] User DAO: get()');
    const client = await db.connect();

    try {
      let query = 'select username, avatar_url from users where id = $1';
      let result = await client.query(query, [id]);

      await client.release();
      if (!result.rows || result.rows.length === 0) {
        return null;
      } else {
        console.log(`User found ${result.rows}`);
        return result.rows[0];
      }
    } catch (err) {}
  }

  static async getAll() {
    console.log('[!] User DAO: getAll()');
    const client = await db.connect();

    try {
      let query = 'select * from users';
      let result = await client.query(query);
      await client.release();
      if (!result.rows || result.rows.length === 0) {
        console.log('There is no records');
        return null;
      } else {
        return result.rows;
      }
    } catch (err) {
      console.log(`[!] User DAO error: ${err}`);
      await client.release();

      return null;
    }
  }

  static async delete(id) {
    console.log('[!] User DAO: delete');
    const client = await db.connect();

    try {
      let query = 'delete from users where id = $1 returning id';
      const result = await client.query(query, [id]);

      await client.release();

      return !(!result.rows || result.rows.length === 0);
    } catch (error) {
      console.log('[!] Database error: ', error);
      await client.release();

      return null;
    }
  }
}

module.exports = Users;
