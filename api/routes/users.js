const express = require('express');
const router = express.Router();

// Require usersController
const usersController = require('../controllers/users');

// Define endPoints
router.post('/', usersController.save);
router.get('/:id', usersController.get);
router.get('/', usersController.getAll);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
