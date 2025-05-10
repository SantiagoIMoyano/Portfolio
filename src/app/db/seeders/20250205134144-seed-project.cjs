'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('project', [
      {
        name: 'My Portfolio',
        description: "FullStack project that showcases my projects, skills, education, and experience in detail. It has been developed using Server Components, which ensures faster rendering and increased security by avoiding client-side requests.",
        link: 'https://github.com/SantiagoIMoyano/Portfolio.git',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/f_auto,q_auto/v1/portfolio/adtjumvrvnanmeb7f6rd',
        role: 'FullStack'
      },
      {
        name: 'Rock Paper Scissors',
        description: 'It\'s a Machine Learning project in which I applied reinforcement learning using a Q-table. The developed AI model competes against four bots, winning at least 60% of the games against each one.',
        link: 'https://github.com/SantiagoIMoyano/RPS-Machine-Learning',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/f_auto,q_auto/v1746917060/rps-image_jrroqs',
        role: 'FullStack'
      },
      {
        name: 'Cat and Dog Classifier',
        description: 'It\'s a Machine Learning project in which I primarily used a convolutional neural network (CNN) to classify images of dogs and cats. This model guarantees approximately 63% accuracy due to its probabilistic nature.',
        link: 'https://github.com/SantiagoIMoyano/Cat-Dog-Classifier',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/f_auto,q_auto/v1746916911/cat_dog_classifier_gsnvnz',
        role: 'FullStack'
      },
      {
        name: 'Book Recomendation System',
        description: 'It\'s a Machine Learning project that generates five book recommendations based on a given book\'s title and user reviews of the books. The developed model uses the K-Nearest Neighbors algorithm.',
        link: 'https://github.com/SantiagoIMoyano/Book-Recomendation',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/f_auto,q_auto/v1746916890/book-image_ndhszl',
        role: 'FullStack'
      },
      {
        name: 'Health Costs Calculator',
        description: 'It\'s a Machine Learning project that uses the linear regression algorithm to estimate individuals\' medical care expenses. The model leverages data such as age, gender, number of children, and more to predict these costs.',
        link: 'https://github.com/SantiagoIMoyano/Health-Costs-Calculator',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/f_auto,q_auto/v1746916920/health-calculator_mfxcob',
        role: 'FullStack'
      },
      {
        name: 'SMS Text Classifier',
        description: 'This Machine Learning project focuses on determining whether a given message or text is spam. To achieve this, the AI model primarily uses an LSTM neural network. This model is trained on a large dataset and delivers satisfactory accuracy.',
        link: 'https://github.com/SantiagoIMoyano/SMS-Text-Classifier',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/f_auto,q_auto/v1746917086/spam-image_mu3vdm',
        role: 'FullStack'
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('project', null, {});
  }
};
