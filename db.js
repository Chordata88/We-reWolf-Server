const mongoose = require('mongoose')

var uri = 'mongodb://MY_USER:MY_PASSWORD@' +
  'MY_SERVER-shard-00-00-clv3h.mongodb.net:27017,' +
  'MY_SERVER-shard-00-01-clv3h.mongodb.net:27017,' +
  'MY_SERVER-shard-00-02-clv3h.mongodb.net:27017/MY_DATABASE' +
  'ssl=true&replicaSet=MY_REPLICASET_NAME-shard-0&authSource=MY_ADMIN_DATABASE';

mongoose.connect(uri);
var db = mongoose.connection;