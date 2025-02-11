'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('projectXtechnology', {
      id_project: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'project',
          key: 'id'
        }
      },
      id_technology: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'technology',
          key: 'id'
        }
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('projectXtechnology');
  }
};