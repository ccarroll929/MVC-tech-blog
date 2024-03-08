// Importing Sequelize library
const Sequelize = require('sequelize');
// Get dotenv package to access the .env file
require('dotenv').config();

let sequelize;
// Checks to see if the application is deployed.
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
