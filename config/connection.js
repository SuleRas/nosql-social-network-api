const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nosql-social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


module.exports = mongoose.connection;


