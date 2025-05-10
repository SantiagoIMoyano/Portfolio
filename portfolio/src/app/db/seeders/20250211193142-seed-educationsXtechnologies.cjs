'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('educationXtechnology', [
      {
        id_education: 1,
        id_technology: 1
      },
      {
        id_education: 1,
        id_technology: 2
      },
      {
        id_education: 1,
        id_technology: 3
      },
      {
        id_education: 1,
        id_technology: 6
      },
      {
        id_education: 1,
        id_technology: 7
      },
      {
        id_education: 1,
        id_technology: 11
      },
      {
        id_education: 1,
        id_technology: 12
      },
      {
        id_education: 1,
        id_technology: 13
      },
      {
        id_education: 1,
        id_technology: 14
      },
      {
        id_education: 1,
        id_technology: 21
      },
      {
        id_education: 1,
        id_technology: 22
      },
      {
        id_education: 1,
        id_technology: 24
      },
      {
        id_education: 1,
        id_technology: 25
      },
      {
        id_education: 1,
        id_technology: 26
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('educationXtechnology', null, {});
  }
};