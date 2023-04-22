const model = require('./model.js')

const controller = {
  sendChickens: (req, res) => {
    model.getChickens(req.body)
    .then(data => {
      res.status(200).send(data)
    })
  },
  sendMessages: (req, res) => {
    model.getMessages(req.params.gameID)
    .then(data => {
      res.status(200).send(data)
    })
  },
  postMessage: (req, res) => {
    model.postMessage(req.params.gameID, req.body)
    .then(data => {
      res.status(201).send(data)
    })
  },
  sendGameState: (req, res) => {
    model.getGameState(req.params.gameID)
    .then(data => {
      res.status(200).send(data)
    })
  },
  updateGame: (req, res) => {
    model.updateGame(req.params.gameID, req.body)
    .then(data => {
      res.status(201).send(data)
    })
  }
}

module.exports = controller