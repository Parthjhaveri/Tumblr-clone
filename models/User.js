"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50]
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    },
    firstName: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    }   
  }, {
    classMethods: {
      associate: function(models) {
        User.belongsToMany(User, { as: 'Follows', through: 'Following' });
        User.hasMany(models.Post);
      }
    }
  });

  return User;
}

