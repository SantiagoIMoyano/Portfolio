'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('experience', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      description: {
        type: Sequelize.STRING(3000),
        allowNull: false
      },
      seniority: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      workplace: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      image: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      role: {
        type: Sequelize.STRING(45),
        allowNull: false,
        references: {
          model: 'profile', 
          key: 'role'
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('experience');
  }
};
