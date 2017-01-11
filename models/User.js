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
        User.belongsToMany(models.Post, {through: 'Notes'})
      }
    }
  });

  return User;
}


function getNotesForOnePost(req, res) {
  Post.findById(req.params.postId)
  .then(function(post) {
    post.getUsers()
  })
  .then(function(users) {
    console.log(users);
    res.send(users);
  })
}

// function getNotesForOnePost(req, res) {
//   Post.findById(req.params.postId)
//   .then(function(post) {
//     return post.getUsers()
//   })
//   .then((users) => {
//     console.log({count: users.length})
//     res.send({count: users.length})
//   })
// }
