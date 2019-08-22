const express = require('express');
const login = require('./login');
const register = require('./register');

//Create instance of express router
const router = express.Router();

/**
 * Define routes
**/

//Login route
router.post('/login', login.post);

//Register route
router.post('/register', register.post);

module.exports = router;