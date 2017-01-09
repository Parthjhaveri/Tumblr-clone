  //giving access to the association table by making the association a model
module.exports = function(sequelize, DataTypes) {
  var Following = sequelize.define("Following_Trackers", {
  });

  return Following;
};