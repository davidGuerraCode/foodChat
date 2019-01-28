const express = require('express');
const router = express.Router();

// Require usersController
const usersController = require('../controllers/users');

// Define endPoints
router.post('/', usersController.save);
router.get('/:id', usersController.get);
router.get('/', usersController.getAll);

module.exports = router;
