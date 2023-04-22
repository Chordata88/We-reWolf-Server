const http = require('./app.js');
const io = require('socket.io')(http);

const port = process.env.PORT || 8080


http.listen(port, () => {
  console.log('Server listening on port ' + port)
})