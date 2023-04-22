const model = require('./model.js')

const controller = {
  sendChickens: (req, res) => {
    model.getChickens(req.body)
    .then(data => {
      res.status(200).send(data)
    })
    .catch(console.log)
  },
  sendMessages: (req, res) => {
    model.getMessages(req.params.gameID)
    .then(data => {
      res.status(200).send(data)
    })
    .catch(console.log)
  },
  postMessage: (req, res) => {
    model.postMessage(req.params.gameID, req.body)
    .then(data => {
      res.status(201).send(data)
    })
    .catch(console.log)
  },
  sendGameState: (req, res) => {
    model.getGameState(req.params.gameID)
    .then(data => {
      res.status(200).send(data)
    })
    .catch(console.log)
  },
  updateGame: (req, res) => {
    model.updateGame(req.params.gameID, req.body)
    .then(data => {
      res.status(201).send(data)
    })
    .catch(console.log)
  },
  vote: (req, res) => {
    model.voteForUser(req.body, req.params.gameID)
    .then(data => {
      res.status(201).send(data)
    })
    .catch(console.log)
  },
  toggleDead: (req, res) => {
    model.toggleDead(req.body, req.params.gameID)
    .then(data => {
      res.status(201).send(data)
    })
    .catch(console.log)
  },
  grantPermissions: (req, res) => {
    model.greantPermissions(req.body, req.params.gameID)
    .then(data => {
      res.status(201).send(data)
    })
    .catch(console.log)
  },
  advanceGame: (req, res) => {
    model.advanceGame(req.params.gameID)
    .then(data => {
      res.status(200).send(data)
    })
  }
}

module.exports = controller