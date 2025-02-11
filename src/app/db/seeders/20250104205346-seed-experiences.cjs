'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('experience', [
      {
        description: 'My tasks included the development of various systems, integrating everything necessary for their proper functioning to bring them to production. I worked in a team of five people, including myself, where our responsibilities were focused on implementing these systems. This involved developing the frontend, backend, database connections, user interface design, and ensuring all security measures necessary for these systems to be accessed over the internet. The systems we developed were web-based and intended for use on both computers and mobile devices. Additionally, I developed software without a graphical interface (APIs) to allow other systems to use the services provided by the developed software. In various web applications, I utilized the following technologies: Python as the programming language for the backend, using the Django framework. JavaScript as the programming language for the frontend, using the Node.js framework and libraries like Axios for backend connections. I also used the Vite development server. For the database, I used Oracle databases, accessible over the internet, with configurations such as wallet, no wallet, or connection via "grant." For system deployments, I used individual containers (one for the backend and one for the frontend), which were built using Dockerfile and docker-compose.yml files. For code version control, I used Git, specifically with GitHub, where we maintained different branches, including a development branch and a production branch in the repository. Both branches had a workflow to deploy the code using a dedicated URL provided by the Lottery organization. Another notable aspect is that I had to maintain collaborative work with other areas of the organization, such as those responsible for Online Gaming and an outsourced organization (CUNIX). All of this was carried out while striving to maintain high levels of quality throughout my work, the project, the process, and the product.',
        seniority: 'Semi-Senior',
        workplace: 'Lottery of Córdoba',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/f_auto,q_auto/v1/portfolio/sxc2dkyydoqyx3pd2dlw',
        role: 'FullStack',
      },
      {
        description: 'My tasks included developing a system for control, visualization, and data storage related to an artificial respirator (AMBU). This web-based system was developed in JavaScript for both the backend and frontend. The technologies used were Node.js, Express.js, Bootstrap, JSON files, and the ORM Sequelize. The connection between the backend and frontend was handled through exposed APIs. The database used was SQLite, and DB Browser software was utilized for data visualization and other database management tasks.',
        seniority: 'Junior',
        workplace: 'CUDAR - National Technological University - Córdoba Regional Faculty',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/f_auto,q_auto/v1/portfolio/tsfdcxxzcndarrpq1ykj',
        role: 'FullStack',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('experience', null, {});
  }
};