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
      id_technology: 9
    },
    {
      id_experience: 1,
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
      id_technology: 12
    },
    {
      id_experience: 2,
      id_technology: 12
    },
    {
      id_experience: 1,
      id_technology: 22
    },
    {
      id_experience: 2,
      id_technology: 22
    },
    {
      id_experience: 1,
      id_technology: 23
    },
    {
      id_experience: 2,
      id_technology: 24
    },
    {
      id_experience: 1,
      id_technology: 26
    }
  ], {})
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('experienceXtechnology', null, {});
  }
};