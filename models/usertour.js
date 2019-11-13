'use strict';
module.exports = (sequelize, DataTypes) => {
  const userTour = sequelize.define('userTour', {
    userID: DataTypes.INTEGER,
    tourID: DataTypes.INTEGER
  }, {});
  userTour.associate = function(models) {
    // associations can be defined here
  };
  return userTour;
};