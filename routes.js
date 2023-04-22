const router = require('express').Router()
const controller = require('./controller.js')

router.get('/chickens', controller.sendChickens)

router.get('/messages/:gameID', controller.sendMessages)

router.post('/messages/:gameID', controller.postMessage)

router.get('/gamestate/:gameID', controller.sendGameState)

//increments vote for a player
//{ userID }
router.put('/vote/:gameID', controller.vote)

//marks a player as "dead", acts as a boolean toggle
//{ userID }
router.put('/markForDeath/:gameID', controller.toggleDead)

//list permissions for a given player
//{ userID, perm[]}
router.post('/permissions/:gameID', controller.grantPermissions)

router.put('/advance/:gameID', controller.advanceGame)

module.exports = router