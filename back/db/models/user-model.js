const Sequelize = require('sequelize');
const sequelizeConnection = require('../index');

var User = sequelizeConnection.define('user', {
  username: {
    type: Sequelize.STRING,
    validate: {
      len: [1, 50]
    }
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      len: [1, 100]
    }
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      len: [1, 100]
    }
  }
});

module.exports = User;
