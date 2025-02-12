# Portfolio

## Repository Content

In this repository, you will find the necessary code to make this project functional. In this branch, only the portfolio code is hosted, as it is the one used for deployment on the Vercel service.  
To maintain a microservices system, the MySQL database is hosted on the Railway service, and because of this, it is not included in the repository.

Lastly, there is a `portfolio-deploy.yml` file, which contains the necessary configuration to run a job in GitHub Actions. This job ensures that with each push to the `main` branch, this project is deployed to production.

## Technologies Used
- Language: JavaScript
- Frontend: Next.js, React, CSS, driver.js
- Backend: Node.js, Next.js, Sequelize
- Database: MySQL
- CI/CD: GitHub Actions
- Services: Cloudinary, Vercel, Railway

## Notice About Running the Project in the `main` Branch

I must inform you that running this project locally without switching branches (staying in `main`) requires having dependencies such as `Node.js` and its related packages installed.

If you still want to run the project in this branch, keep in mind that after navigating to the project's root directory, you need to open a terminal and execute the following commands:

    1. `npm install`

    2. `npm run build`

    3. `npm start`

To stop the project execution, press the `Ctrl + C` key combination in the terminal where the previous commands were executed.