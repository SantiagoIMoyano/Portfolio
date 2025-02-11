'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('experienceXtechnology', [
    {
      id_experience: 1,
      id_technology: 1
    },
    {
      id_experience: 1,
      id_technology: 2
    },
    {
      id_experience: 2,
      id_technology: 2
    },
    {
      id_experience: 1,
      id_technology: 4
    },
    {
      id_experience: 2,
      id_technology: 7
    },
    {
      id_experience: 1,
      id_technology: 8
    },
    {
      id_experience: 1,
      id_technology: 9
    },
    {
      id_experience: 1,
      id_technology: 10
    },
    {
      id_experience: 2,
      id_technology: 10
    },
    {
      id_experience: 1,
      id_technology: 11
    },
    {
      id_experience: 2,
      id_technology: 11
    },
    {
      id_experience: 1,
      id_technology: 15
    },
    {
      id_experience: 2,
      id_technology: 15
    },
    {
      id_experience: 1,
      id_technology: 16
    },
    {
      id_experience: 2,
      id_technology: 17
    },
    {
      id_experience: 1,
      id_technology: 19
    }
  ], {})
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('experienceXtechnology', null, {});
  }
};
