const {INTEGER, STRING, BOOLEAN} = require('sequelize')
const sequelize = require("../connection")

const User = sequelize.define(
  "users",
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    age: {
      type: INTEGER,
      allowNull: false,
    },
    isEmployeed: {
      type: BOOLEAN,
      defaultValue: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

module.exports = User;
