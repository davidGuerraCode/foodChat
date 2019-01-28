const Users = require('../models/Users');

async function save(req, res) {
    try {
        console.log('[Creating user]');
        let model = new Users(req.body);
        let result = await model.save();

        if (!result) {
            res.status(400).json({
                message: 'An error happened'
            });
        } else {
            console.log('[!] User created succesfully');
            res.status(201).json({
                id: result.id,
                username: result.username,
                avatarUrl: result['avatar_url']
            });
        }
    } catch (err) {
        console.error(`[!] Something gone wrom ${err}]`);
        res.send(500).json({
            message: `Something went wrong ${err}`
        });
    }
}

async function get(req, res) {
    console.log('[User controller: getUser()]');

    try {
        let result = await Users.get(req.params.id);

        res.status(200).json(result);
    } catch (err) {
        console.log(`An error happened ${err}`);
        res.status(500).json({ err });
    }
}

async function getAll(req, res) {
    console.log('[User controller: getAll()]');

    try {
        let result = await Users.getAll(req.params.id);

        res.status(200).json(result);
    } catch (err) {
        console.log(`An error happened ${err}`);
        res.status(500).json({ err });
    }
}

module.exports = {
    save,
    get,
    getAll
};
