const { connect, connection } = require('mongoose');

const connectionString = '';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;