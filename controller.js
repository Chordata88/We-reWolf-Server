const model = require('./model.js')

const controller = {
  sendChickens: (req, res) => {
    model.getChickens(req.body)
    .then(data => {
      res.status(200).send(data)
    })
  }
}

module.exports = controller