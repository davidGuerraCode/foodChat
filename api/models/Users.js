const db = require('../db');

class Users {
    constructor(json) {
        if (json !== undefined && json !== null) {
            this.id = json.id || null;
            this.username = json.username || null;
            this.avatarUrl = json.avatarUrl || null;

            this.all = [this.username, this.avatarUrl];
        }
    }

    async save() {
        console.log('[User DAO: save()]');
        const client = await db.connect();
        let query = 'insert into users (username, avatar_url';
        let values = ') values ($1, $2';

        query = `${query}${values}) returning *`;

        try {
            console.log(`[Save user query]: ${JSON.stringify(query)}`);
            let result = await client.query(query, this.all);

            if (!result.rows || result.rows === 0) {
                await client.release();

                return null;
            } else {
                console.log(`[!] Result`, result.rows[0]);
                await client.release();
                return result.rows[0];
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
}

module.exports = Users;
