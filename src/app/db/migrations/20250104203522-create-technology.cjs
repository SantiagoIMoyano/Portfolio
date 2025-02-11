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
      },
      id_project: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'project', 
          key: 'id' 
        }
      },
      id_experience: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'experience', 
          key: 'id' 
        }
      },
      id_education: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'education', 
          key: 'id' 
        }
      }
    });

    // Agrego una restricción CHECK que garantice que al menos una de las claves foráneas no sea nula.
    // Nota: No todos los motores de base de datos soportan constraints CHECK de la misma manera.
    await queryInterface.addConstraint('technology', {
      fields: ['id_project', 'id_experience', 'id_education'],
      type: 'check',
      where: {
        [Sequelize.Op.or]: [
          { id_project: { [Sequelize.Op.ne]: null } },
          { id_experience: { [Sequelize.Op.ne]: null } },
          { id_education: { [Sequelize.Op.ne]: null } } 
        ]
      },
      name: 'technology_at_least_one_fk'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('technology');
  }
};
