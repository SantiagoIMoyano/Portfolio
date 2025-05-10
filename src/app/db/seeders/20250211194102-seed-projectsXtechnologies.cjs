'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('projectXtechnology', [
      {
        id_project: 1,
        id_technology: 2
      },
      {
        id_project: 1,
        id_technology: 5
      },
      {
        id_project: 1,
        id_technology: 11
      },
      {
        id_project: 1,
        id_technology: 12
      },
      {
        id_project: 1,
        id_technology: 22
      },
      {
        id_project: 1,
        id_technology: 26
      },
      {
        id_project: 2,
        id_technology: 1
      },
      {
        id_project: 2,
        id_technology: 18
      },
      {
        id_project: 3,
        id_technology: 1
      },
      {
        id_project: 3,
        id_technology: 8
      },
      {
        id_project: 3,
        id_technology: 18
      },
      {
        id_project: 3,
        id_technology: 16
      },
      {
        id_project: 3,
        id_technology: 15
      },
      {
        id_project: 3,
        id_technology: 20
      },
      {
        id_project: 4,
        id_technology: 1
      },
      {
        id_project: 4,
        id_technology: 19
      },
      {
        id_project: 4,
        id_technology: 17
      },
      {
        id_project: 4,
        id_technology: 20
      },
      {
        id_project: 5,
        id_technology: 1
      },
      {
        id_project: 5,
        id_technology: 8
      },
      {
        id_project: 5,
        id_technology: 17
      },
      {
        id_project: 5,
        id_technology: 18
      },
      {
        id_project: 5,
        id_technology: 16
      },
      {
        id_project: 5,
        id_technology: 15
      },
      {
        id_project: 5,
        id_technology: 20
      },
      {
        id_project: 6,
        id_technology: 1
      },
      {
        id_project: 6,
        id_technology: 8
      },
      {
        id_project: 6,
        id_technology: 17
      },
      {
        id_project: 6,
        id_technology: 18
      },
      {
        id_project: 6,
        id_technology: 15
      },
      {
        id_project: 6,
        id_technology: 20
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('projectXtechnology', null, {});
  }
};