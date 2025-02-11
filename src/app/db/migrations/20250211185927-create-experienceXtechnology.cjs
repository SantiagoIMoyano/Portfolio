'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('experienceXtechnology', {
      id_experience: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'experience',
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
    await queryInterface.dropTable('experienceXtechnology');
  }
};
