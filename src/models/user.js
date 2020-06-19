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
    // associations can be defined here
  };
  return User;
};