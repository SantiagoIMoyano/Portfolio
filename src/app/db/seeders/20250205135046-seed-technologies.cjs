'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //No ejecutar seeders porque faltan atributos.
    await queryInterface.bulkInsert('technology', [
      {
        type: 'Language',
        name: 'Python',
        description: 'In Python, I have knowledge and experience in scripting for both the development and use of algorithms and data structures. I have utilized functions, modules, packages, libraries, and other tools that have enabled me to build efficient and high-quality software. I have also implemented the object-oriented and structured programming paradigms.',
        level: 'Intermediate/Advanced',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738886489/portfolio/nt7ylwt8kih6rxxpuv4q.svg',
        sizeImage: 75,
        stack: 'Python'
      },
      {
        type: 'Language',
        name: 'JavaScript',
        description: 'In JavaScript, I have experience developing web applications using various language features such as asynchronous functions, promises, and callbacks. I am also familiar with components and coding in .jsx files. Additionally, I have used various libraries with this language, such as Axios, Chart.js, and others.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738887086/portfolio/a2tr9ev649g9hf1pbbh4.svg',
        sizeImage: 65,
        stack: 'JavaScript'
      },
      {
        type: 'Language',
        name: 'Java',
        description: 'With Java, I have focused on developing backend APIs using the latest versions of the language, incorporating features such as streams. My experience includes object-oriented programming and functional programming. I have also implemented an "API Gateway" with this language to centralize authentication and authorization.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738887101/portfolio/y5bcvrtelibonadqf5vl.svg',
        sizeImage: 70,
        stack: 'Java'
      },
      {
        type: 'Framework',
        name: 'Django',
        description: 'In Django, I have knowledge and experience with REST APIs, which allows me to connect to databases through its ORM and integrate with frontend software for system visualization. Additionally, with this framework, I implemented the authentication process using Azure Active Directory.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738887148/portfolio/agp1kh7garluoz5s5gjd.svg',
        sizeImage: 85,
        stack: 'Python'
      },
      {
        type: 'Framework',
        name: 'Next.js',
        description: 'With the Next.js framework, which enables the development of web applications with both server-side and client-side functionalities, it ensures lightweight and secure software as much of the web runs on the server. I complemented Next.js with Node.js for backend development and React for frontend development, allowing the entire application to use a single programming language.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738887159/portfolio/ptmq0y2pi7zssjgf7fnf.svg',
        sizeImage: 75,
        stack: 'JavaScript'
      },
      {
        type: 'Framework',
        name: 'Spring',
        description: 'With the Spring framework, along with dependencies such as Spring Boot, Spring Web, Spring Data JPA, DevTools, and Lombok, my experience includes developing REST APIs and applying the MVC (Model-View-Controller) pattern. Additionally, I have integrated the code developed with this framework into the Keycloak authentication and authorization service.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738887172/portfolio/pybpumht9jgvgsjy2kc5.svg',
        sizeImage: 75,
        stack: 'Java'
      },
      {
        type: 'Framework',
        name: 'Express.js',
        description: 'Regarding the Express.js framework, I have primarily used it to develop simple applications such as web pages that perform basic CRUD operations with database records.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738887185/portfolio/rfhhbx8zk1o2zxtp5des.svg',
        sizeImage: 70,
        stack: 'JavaScript'
      },
      {
        type: 'Framework',
        name: 'TensorFlow',
        description: 'With TensorFlow, I have been able to develop artificial intelligence models using a variety of neural networks. Together with the Python programming language, I designed, trained, evaluated, and made predictions with these models using extensive data for both training and evaluation.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1746917097/tensorflow_ekrad4.svg',
        sizeImage: 70,
        stack: 'Machine_Learning'
      },
      {
        type: 'Tool',
        name: 'Celery',
        description: 'Using the Celery tool has given me the ability to execute queued tasks once they have been submitted by the microservice that requires them. This allows for asynchronous processing between the microservice\'s code and the server\'s subsequent response.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738887200/portfolio/rgga5fazwanoxqnbh0az.svg',
        sizeImage: 80,
        stack: 'Python'
      },
      {
        type: 'Tool',
        name: 'RabbitMQ',
        description: 'With RabbitMQ, I have created the necessary components to transmit large amounts of data between an application and a remote server. These components acted as sender and receiver, depending on which part was sending the message and which was receiving it.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738887210/portfolio/xkey1hl50soq8nbzamym.svg',
        sizeImage: 63,
        stack: 'Python'
      },
      {
        type: 'Tool',
        name: 'Node.js',
        description: 'I have used the Node.js runtime environment for developing backend applications in JavaScript, which has allowed me to test the developed functions locally before deploying them to production, as well as using it in production environments. With this environment, I have been able to run everything necessary for the proper functioning of the implemented code.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738887227/portfolio/jaytb26lcsymujc7p2j8.svg',
        sizeImage: 75,
        stack: 'JavaScript'
      },
      {
        type: 'Tool',
        name: 'React',
        description: 'With React, when developing the frontend of applications, I have used various hooks such as useState, useEffect, and useRef. With these methods, I was able to handle various events, such as a click on a component or the rendering of a web page. Additionally, I have linked events between components to trigger specific functionality or effects.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738887231/portfolio/loa21osuguiskqcykusc.svg',
        sizeImage: 75,
        stack: 'JavaScript'
      },
      {
        type: 'Tool',
        name: 'Hibernate',
        description: 'I have used Hibernate in conjunction with the MVC pattern to map the objects created in Java to the columns of tables in a relational database. This tool, with the help of annotations, accelerated the development of applications using the object-oriented paradigm.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738887249/portfolio/ljmcdx0jark55npottmp.svg',
        sizeImage: 70,
        stack: 'Java'
      },
      {
        type: 'Tool',
        name: 'Lombok',
        description: 'The use of this library has allowed me to automatically implement methods such as get and set for each class created through the use of annotations. Additionally, I made annotations to override methods, specify database table names, and more.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738887256/portfolio/kej9yx7muq4xuv5f28z6.svg',
        sizeImage: 85,
        stack: 'Java'
      },
      {
        type: 'Tool',
        name: 'Keras',
        description: 'The Keras library has enabled me to design multi-layer neural network architectures—using dense layers, LSTMs, convolutional layers, and more. I\'ve also been able to configure optimizers and loss functions such as Adam and Binary Crossentropy. Additionally, thanks to this library, I\'ve been able to modularize the training, evaluation, and prediction workflows within my projects.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1746916963/Keras_p9hy4n.svg',
        sizeImage: 65,
        stack: 'Machine_Learning'
      },
      {
        type: 'Tool',
        name: 'Matplotlib',
        description: 'With this tool, I\'ve been able to plot various datasets—as well as the evaluation results, training progress, and predictions of the AI models I developed. This capability has given me clearer insights during analysis and has guided me in the search for better machine learning model designs.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1746916974/matplotlib_akmpwk.svg',
        sizeImage: 75,
        stack: 'Machine_Learning'
      },
      {
        type: 'Tool',
        name: 'Pandas',
        description: 'I\'ve employed the Pandas library to load the training and evaluation data needed for the proper development of my machine learning models. Mostly, I\'ve used it to import data from “.csv” files and to preview records in an intuitive tabular format.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1746917031/pandas_xio8v9.svg',
        sizeImage: 70,
        stack: 'Machine_Learning'
      },
      {
        type: 'Tool',
        name: 'NumPy',
        description: 'This library has been extremely useful to me, as it has enabled me to perform multiple data preprocessing steps to extract the most relevant information, combine datasets, and format them as required by machine learning models. I\'ve also used it to create arrays and matrices, which are essential for the proper functioning of the models I\'ve developed.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1746917018/numpy_zkkcav.svg',
        sizeImage: 70,
        stack: 'Machine_Learning'
      },
      {
        type: 'Tool',
        name: 'Scikit-learn',
        description: 'This library has allowed me to configure models such as Nearest Neighbors, along with various algorithms and metrics. In this way, I\'ve been able to simplify model development and focus on other tasks like data extraction, preprocessing, and analyzing the problem to be solved.',
        level: 'Basic',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1746917072/scikitlearn_ayfho5.svg',
        sizeImage: 92,
        stack: 'Machine_Learning'
      },
      {
        type: 'Tool',
        name: 'Pytest',
        description: 'With the Pytest library, I\'ve developed various tests that, for the most part, ensure the AI model I built solves the problem at hand acceptably. Using this library makes it easy to see at a glance whether any test has failed or if they\'ve all passed.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1746917045/pytest_b5efee.svg',
        sizeImage: 95,
        stack: 'Machine_Learning'
      },
      {
        type: 'Database',
        name: 'SQL Server',
        description: 'With the SQL Server database, I have performed basic operations using SQL statements, such as reading, creating, updating, and deleting records, tables, and databases. Additionally, I have implemented tables with primary keys composed of more than one attribute, and relationships between tables, including one-to-one, one-to-many, and many-to-many (using intermediate tables).',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738887276/portfolio/w4wn8tb8qap92sd9je6n.svg',
        sizeImage: 90,
        stack: 'Database'
      },
      {
        type: 'Database',
        name: 'MySQL',
        description: 'By using this database, I have created users with passwords and specific permissions to access databases. Specifically, I have placed databases with the MySQL engine in a container, which can be accessed with the correct credentials.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738887289/portfolio/ptbqnbngoryiohrjfm6h.svg',
        sizeImage: 65,
        stack: 'Database'
      },
      {
        type: 'Database',
        name: 'Oracle Database',
        description: 'To use the Oracle database remotely, I had to use a set of special files to connect. These files contained, among other things, the connection configurations. Additionally, I have worked with both older and current versions of this database engine.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738887301/portfolio/ocoany4b3pj5x5zxbilc.svg',
        sizeImage: 90,
        stack: 'Database'
      },
      {
        type: 'Database',
        name: 'SQLite',
        description: 'Regarding this database, I have used it alongside various languages, such as Java, JavaScript, and Python. Since it is implemented as a file-based database, I have always used it in development environments, which allowed me to progress more quickly with the requested projects.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738887307/portfolio/jhhvyanhw6y2qey0e1sv.svg',
        sizeImage: 85,
        stack: 'Database'
      },
      {
        type: 'CI/CD',
        name: 'Gitlab CI/CD',
        description: 'I have experience and knowledge in pipelines, specifically with GitLab CI/CD, where I have automated tasks such as code linting, secret scanning, dynamic code scanning, and static analysis, among others. Additionally, I have defined CI/CD variables to ensure they are not exposed in files like .env or in my application\'s code.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738887321/portfolio/c6ifu2ukhszpvuoehk26.svg',
        sizeImage: 70,
        stack: 'DevOps'
      },
      {
        type: 'CI/CD',
        name: 'Docker',
        description: 'I have used containers both in my academic training and professional experience. I know how to implement Dockerfiles to download images, host images in a repository, and also download those images I have created. Additionally, I have experience managing containers using a docker-compose.yml file, which allows me to split my application into different parts.',
        level: 'Intermediate',
        image: 'https://res.cloudinary.com/diryq3v6r/image/upload/v1738887327/portfolio/rc5ffptfkj4runipbvb6.svg',
        sizeImage: 100,
        stack: 'DevOps'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('technology', null, {});
  }
};
