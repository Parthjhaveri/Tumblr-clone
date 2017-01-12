"use strict";

module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define("Tag", {
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50]
      }
    }   
  }, {
    classMethods: {
      associate: function(models) {
        Tag.belongsToMany(models.Post, { through: 'Post_Tags' });
        models.Post.belongsToMany(Tag, { through: 'Post_Tags' });
      }
    }
  });

  return Tag;
}

