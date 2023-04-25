const app = require('express')();
const http = require('http').Server(app);

const bodyParser = require('body-parser');
const router = require('./routes.js'); const auth = require('./auth.js');

app.use(bodyParser.json()); app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', router); app.use('/', auth)

module.exports = http