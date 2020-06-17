'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    customerId: DataTypes.INTEGER,
    filmId: DataTypes.INTEGER,
    orderDate: DataTypes.DATE,
    devolution: DataTypes.DATE,
    price: DataTypes.FLOAT,
    days: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};