'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    CustomerId: DataTypes.INTEGER,
    FilmId: DataTypes.INTEGER,
    OrderDate: DataTypes.DATE,
    Devolution: DataTypes.DATE,
    Price: DataTypes.FLOAT,
    Days: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};