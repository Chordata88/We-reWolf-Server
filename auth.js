const auth = require('express').Router();
const authControllers = require('./authControllers.js');


auth.post('/signup', authControllers.createUser)

auth.post('/login', authControllers.verifyUser)


module.exports = auth