'use strict';
module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define('Token', {
    Token: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    Revoked: DataTypes.BOOLEAN
  }, {});
  Token.associate = function(models) {
    // associations can be defined here
  };
  return Token;
};