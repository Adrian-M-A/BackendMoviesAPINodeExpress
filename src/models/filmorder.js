'use strict';
module.exports = (sequelize, DataTypes) => {
  const FilmOrder = sequelize.define('FilmOrder', {
    FilmId: DataTypes.INTEGER,
    OrderId: DataTypes.INTEGER
  }, {});
  FilmOrder.associate = function(models) {
    // associations can be defined here
  };
  return FilmOrder;
};