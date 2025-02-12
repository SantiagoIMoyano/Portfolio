# Portfolio

## Repository Content

In this repository, you will find the necessary code to make this project functional. The repository contains the `db` and `portfolio` folders. These folders include the database utilities and the project code.  
Additionally, alongside these directories, you will find a `docker-compose.yml` file, which is responsible for orchestrating the database and the portfolio, ensuring that everything is deployed in the correct order. Since a `docker-compose.yml` file is included, this project is set up to be executed locally using Docker containers.

## Technologies Used
- Language: JavaScript
- Frontend: Next.js, React, CSS, driver.js
- Backend: Node.js, Next.js, Sequelize
- Database: MySQL
- CI/CD: Docker
- Services: Cloudinary

## Execution Requirements
1. If using Windows, Docker Desktop must be installed. Otherwise, install Docker.

2. Have Git installed (optional for cloning the repository).

## Running Containers

First, you need to clone the repository into a directory on your system using the command:  
`git clone https://github.com/SantiagoIMoyano/Portfolio.git`.  

If you do not want to use Git, you can download a `.zip` file from the GitHub repository at the following link:  
`https://github.com/SantiagoIMoyano/Portfolio`.  
Then, extract the file, and you will see the project content.

Next, if you are using Windows, make sure that "Docker Desktop" is running. This is essential to execute the project.  
If you are using another operating system, this step is not required.

Now, open a terminal on your system, navigate to the project folder (Portfolio directory), and execute the following commands in the specified order:

1. `docker-compose build`

2. `docker-compose up -d` if you do not want to see the container logs, or `docker-compose up` if you do.

Once the containers are deployed, the portfolio will be available at the following address:  
`localhost:3000`

Finally, if you have finished exploring the project, you can stop and remove the containers using the command:  
`docker-compose down`