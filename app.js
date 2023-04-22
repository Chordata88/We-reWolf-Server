const app = require('express')();
const http = require('http').Server(app);

const bodyParser = require('body-parser');
const router = require('./routes.js');

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', router)

module.exports = http