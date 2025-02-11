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
        id_technology: 10
      },
      {
        id_project: 1,
        id_technology: 11
      },
      {
        id_project: 1,
        id_technology: 15
      },
      {
        id_project: 1,
        id_technology: 19
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('projectXtechnology', null, {});
  }
};