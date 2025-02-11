'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('profile', [
      {
        role: 'FullStack',
        presentation: "Software developer and an advanced student in the Information Systems Engineering program at National Technological University - Córdoba Regional Faculty. Currently, I consider myself a FullStack software developer, although I'm particularly interested in the fields of backend development, artificial intelligence, and cybersecurity. I'm a proactive person with a strong capacity for self-directed learning, eager to learn and take on new challenges both professionally and academically."
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('profile', null, {});
  }
};