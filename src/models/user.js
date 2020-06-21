'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Name: DataTypes.STRING,
    Surnames: DataTypes.STRING,
    Birthdate: DataTypes.DATE,
    Document: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    Role: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Order);
  };
  return User;
};