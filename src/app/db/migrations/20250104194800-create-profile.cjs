'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('profile', {
      role: {
        type: Sequelize.STRING(45),
        allowNull: false,
        primaryKey: true
      },
      presentation: {
        type: Sequelize.STRING(700),
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('profile');
  }
};
