const express = require('express');
const register = require('./register');

//Create instance of express router
const router = express.Router();

/**
 * Define routes
**/

//Register route
router.post('/register', register.post);

module.exports = router;