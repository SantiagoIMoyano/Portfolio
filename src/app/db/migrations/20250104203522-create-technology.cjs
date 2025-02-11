'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('technology', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      type: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      level: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      image: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      sizeImage: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      stack: {
        type: Sequelize.STRING(45),
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('technology');
  }
};
