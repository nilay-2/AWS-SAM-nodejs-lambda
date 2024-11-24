const {INTEGER, STRING, BOOLEAN} = require('sequelize')
const sequelize = require("../connection")

const Post = sequelize.define(
  "posts",
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    message: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

module.exports = Post;
