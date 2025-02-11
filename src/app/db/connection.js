import { Sequelize } from 'sequelize';
import config from './config/config';
import mysql2 from 'mysql2';

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  dialectModule: mysql2,
});

export { sequelize, Sequelize };