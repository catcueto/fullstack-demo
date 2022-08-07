const Sequelize = require("sequelize");

require("dotenv").config();

// creates conection to our DB
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "local host",
      dialect: "mysql",
      port: 3306,
    });

module.exports = sequelize;
