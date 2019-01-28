const express = require('express');
const path = 'path';
const bodyParse = require('body-parser');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

// Set endPoints
app.get('/api/hello', async (req, res) => {
    const client = await db.connect();

    try {
        let query = 'select * from users';
        let result = await client.query(query);

        await client.release();

        console.log(`[!] Query result ${JSON.stringify(result.rows)}`);
    } catch (err) {
        console.error(`Something happend ${err}`);
    }
    // res.send({ express: 'Hello from Express' });
});

app.listen(PORT, () => console.log(`[+] Server running on port ${PORT}`));
