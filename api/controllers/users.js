const cookie = require('cookie');
const Users = require('../models/Users');

async function save(req, res) {
  try {
    console.log('[Controller Creating user]');
    let user = new Users(req.body);
    let result = await user.save();

    if (!result) {
      res.status(400).json({
        message: 'User exists already, try with other valid email!'
      });
    } else {
      console.log('[!] User created succesfully');
      res.status(201).json({
        id: result.id,
        email: result.email,
        createdAt: result['created_at']
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
  console.log('[User controller: getAll()]', req.cookies);

  try {
    let result = await Users.getAll();

    res.status(200).json(result);
  } catch (err) {
    console.log(`An error happened ${err}`);
    res.status(500).json({ err });
  }
}

async function deleteUser(req, res) {
  console.log('[User DAO: deleteUser()]');
  const { id } = req.params;
  try {
    let result = await Users.delete(id);

    if (!result) {
      res.status(400).json({
        rc: -1,
        message: 'Cannot delete user'
      });
    } else {
      res.status(200).json({
        rc: 0,
        message: 'Process OK'
      });
    }
  } catch (error) {
    console.log('User controller error deleting', error);

    res.status(500).json({
      rc: -1,
      message: 'Cannot delete user'
    });
  }
}

module.exports = {
  save,
  get,
  getAll,
  deleteUser
};
