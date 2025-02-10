'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('education', [
      {
        degree: 'Information Systems Engineering',
        description: 'The academic education I received covers many areas of software development, including requirements gathering, analysis, design, implementation, testing, and more. Among the most notable skills I can mention are the following:Software development in Python, Java, and JavaScript.Proficiency with the Spring Framework (Spring Boot, Spring Data JPA, Hibernate, Spring Web, Lombok, DevTools, and Maven).Express.js framework expertise, using React.Experience with JWT/JWE tokens, Keycloak, ORMs (Sequelize and Hibernate), and Axios.Knowledge of Docker (Dockerfiles and Docker Compose), Kubernetes, MiniKube, ElasticSearch, container security, static analysis, and linting for code and Dockerfiles.Use of Git, including various commands, workflows, CI/CD tools, environment variables, and code runners for remote execution.Development and consumption of APIs, microservices, and client-server architectures.Creation of reports in PDF, CSV, TXT, or JSON formats.Software development utilizing object-oriented, structured, functional, and logical programming paradigms.Database management, including SQL queries and database engines such as MySQL, SQL Server, SQLite, Oracle Database, and Firebase Storage.Intermediate proficiency in Operating Systems (Windows and Linux, specifically Ubuntu and Debian).Knowledge of system design patterns (Adapter, Singleton, Iterator, Observer, State, Strategy, Template Method).Understanding of project management frameworks such as SCRUM, Nexus, PUD, defined processes, empirical processes, Agile philosophy, Lean-Kanban philosophy, and traditional project management.',
        institution: 'National Technological University - Córdoba Regional Faculty',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/f_auto,q_auto/v1/portfolio/mcplgtkkiw8b9hsczvkn',
        role: 'FullStack'
      },
      {
        degree: 'English',
        description: 'I have developed a strong proficiency in English that falls within the intermediate to advanced range, enabling me to communicate effectively both in writing and through verbal expression. Over the years, I have acquired most of my knowledge of the language through self-directed study, dedicating significant time to independent learning and practice using a variety of resources. This self-taught approach has allowed me to deepen my understanding of English grammar, vocabulary, and pronunciation. As a result of my continuous effort and practice, I confidently assess my abilities as being at a B2 level according to the Common European Framework of Reference for Languages (CEFR), which reflects my capability to understand the main ideas of complex texts and to interact with native speakers with a fair degree of fluency and spontaneity.',
        institution: 'Autodidact',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/f_auto,q_auto/v1/portfolio/m461fyox7ag5gfrjcevr',
        role: 'FullStack',
      },
      {
        degree: 'High School Diploma in Communication and Social Sciences',
        description: 'I have developed a broad and comprehensive understanding of research methodology, public speaking, and psychology over the course of my studies and practical experiences. This background has allowed me to not only grasp the theoretical concepts behind each discipline but also apply them effectively in real-world situations. I have acquired the ability to gather relevant information from a wide range of sources, critically analyze and process this data in alignment with my specific objectives, and then carefully organize and summarize the findings in a coherent manner for subsequent presentations. This systematic approach ensures that the information is communicated clearly and persuasively, whether I am addressing a small group or a larger audience.',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/f_auto,q_auto/v1/portfolio/wgibg2hkahqhqxt08ccl',
        institution: 'Manuel Belgrano Comprehensive School',
        role: 'FullStack',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('education', null, {});
  }
};