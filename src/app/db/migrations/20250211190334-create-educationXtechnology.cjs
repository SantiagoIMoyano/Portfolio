'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('educationXtechnology', {
      id_education: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'education',
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
    await queryInterface.dropTable('educationXtechnology');
  }
};
