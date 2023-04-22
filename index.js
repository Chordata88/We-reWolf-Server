const http = require('./app.js');

const port = process.env.PORT || 8080


http.listen(port, () => {
  console.log('Server listening on port ' + port)
})