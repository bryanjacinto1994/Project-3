'use strict';
module.exports = (sequelize, DataTypes) => {
    const Tour = sequelize.define('Tour', {
        name: DataTypes.STRING,
        price: DataTypes.STRING,
        currency: DataTypes.STRING,
        url: DataTypes.STRING,
        img: DataTypes.STRING
    }, {});
    Tour.associate = function (models) {
        // associations can be defined here
        // Tour.hasMany(models.User, {
        //   through: {
        //     model: models.userTour
        //   }
        // });
    };
    return Tour;
};