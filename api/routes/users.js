const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');
const isAuth = require('../middleware/is-auth');

router.post('/', usersController.save);
router.get('/', usersController.getAll);
// router.get('/', isAuth, usersController.getAll);
router.get('/:id', usersController.get);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
