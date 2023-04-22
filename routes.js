const router = require('express').Router()
const controller = require('./controller.js')

router.get('/chickens', controller.sendChickens)

module.exports = router