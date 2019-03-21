// const db = require('../db');
const db = require('../db/knex');
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
    console.log('[User Model DAO: login]');

    try {
      const { email } = this;
      let result = await db
        .select('*')
        .from('users')
        .where(db.raw('lower("email") = ?', email));

      if (!result[0] || result.length === 0) {
        console.log('[!] Email and password combination not valid');

        return null;
      } else {
        let match = await bcrypt.compare(this.password.toString(), result[0].password);

        if (!match) {
          console.log('[!] Email and password combination not valid');
          return null;
        }

        return result[0];
      }
    } catch (error) {
      console.log(error);
    }
  }

  async save() {
    console.log('[User DAO: save()]');
    let result;

    try {
      const hash = await bcrypt.hash(this.password, 12);
      const { email } = this;
      // Check if user not exists already
      result = await db
        .select('email')
        .from('users')
        .where({ email });

      if (!result[0] || result.length === 0) {
        result = await db('users')
          .insert({ email, password: hash, created_at: db.fn.now() })
          .returning('*');

        return result[0];
      } else {
        console.log('[User exists already]');
        return null;
      }
    } catch (err) {
      console.log(`Error saving data ${err}`);
    }
  }

  static async get(id) {
    console.log('[!] User DAO: get()');
    try {
      let result = await db
        .select('username', 'avatar_url', 'email', 'created_at')
        .from('users')
        .where({ id });

      if (!result || result.length === 0) {
        return null;
      } else {
        console.log(`User found ${result[0]}`);
        return result[0];
      }
    } catch (err) {
      console.log('Error on DB');
    }
  }

  static async getAll() {
    console.log('[!] User DAO: getAll()');
    try {
      let result = await db.select('*').from('users');
      console.log('[Result]', result);
      if (!result || result.length === 0) {
        console.log('There is no records');
        return null;
      } else {
        return result;
      }
    } catch (err) {
      console.log(`[!] User DAO error: ${err}`);

      return null;
    }
  }

  static async delete(id) {
    console.log('[!] User DAO: delete');

    try {
      const result = await db
        .del('id')
        .from('users')
        .where({ id });
      console.log('[RESULT]', result);
      // let query = 'delete from users where id = $1 returning id';
      return !result.rows || result.rows.length === 0;
    } catch (error) {
      console.log('[!] Database error: ', error);

      return null;
    }
  }
}

module.exports = Users;
