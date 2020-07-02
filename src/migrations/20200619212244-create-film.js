'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Films', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Title: {
        type: Sequelize.STRING
      },
      Overview: {
        type: Sequelize.TEXT
      },
      PosterPath: {
        type: Sequelize.STRING
      },
      VoteAverage: {
        type: Sequelize.FLOAT
      },
      Popularity: {
        type: Sequelize.FLOAT
      },
      ReleaseDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Films');
  }
};