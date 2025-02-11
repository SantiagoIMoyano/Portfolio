'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // No ejecutar aun ya que faltan dos atributos.
    await queryInterface.bulkInsert('project', [
      {
        name: 'My Portfolio',
        description: "FullStack project that showcases my projects, skills, education, and experience in detail. It has been developed using Server Components, which ensures faster rendering and increased security by avoiding client-side requests.",
        link: 'https://github.com/SantiagoIMoyano/Portfolio.git',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/f_auto,q_auto/v1/portfolio/adtjumvrvnanmeb7f6rd',
        role: 'FullStack'
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('project', null, {});
  }
};
