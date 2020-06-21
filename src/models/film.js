'use strict';
module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define('Film', {
    Title: DataTypes.STRING,
    Overview: DataTypes.TEXT,
    PosterPath: DataTypes.STRING,
    VoteAverage: DataTypes.FLOAT
  }, {});
  Film.associate = function(models) {
    Film.belongsToMany(models.Order, {
      through: models.FilmOrder
  });
  };
  return Film;
};