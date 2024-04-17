const Sequelize = require("sequelize");

// To pull the environment variables from the .env file
require("dotenv").config();

// Create the connection to the database, pass in your MySQL information for username and password
const sequelize = process.env.JAWSDB_URL 
  ? new Sequelize(process.env.JAWSDB_URL) // JAWSDB_URL is for HEROKU
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { // This is for Local
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Export the sequelize object
module.exports = sequelize;