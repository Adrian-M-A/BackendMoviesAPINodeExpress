'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    UserId: DataTypes.INTEGER,
    FilmId: DataTypes.INTEGER,
    OrderDate: DataTypes.DATE,
    Devolution: DataTypes.DATE,
    Price: DataTypes.FLOAT,
    Days: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.User);
    Order.belongsToMany(models.Film, {
      through: models.FilmOrder
  });
  };
  return Order;
};