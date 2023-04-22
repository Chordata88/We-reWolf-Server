const router = require('express').Router()
const controller = require('./controller.js')

router.get('/chickens', controller.sendChickens)

router.get('/messages/:gameID', controller.sendMessages)

router.post('/messages/:gameID', controller.postMessage)

router.get('/gamestate/:gameID', controller.sendGameState)

router.put('/gamestate/:gameID', controller.updateGame)

module.exports = router