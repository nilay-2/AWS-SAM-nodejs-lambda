const {Sequelize} = require('sequelize')
const dbConfig = require('../config/db.json')
// const DB_NAME = dbConfig.POSTGRES_DATABASE;
// const DB_USER = dbConfig.POSTGRES_USER;
// const DB_PASSWORD = dbConfig.POSTGRES_PASSWORD;
// const DB_HOST = dbConfig.POSTGRES_HOST;
const DB_URI = dbConfig.DB_URI;

const sequelize = new Sequelize(DB_URI, { dialect: "postgres" });

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

(async () => await connect())()

module.exports = sequelize

