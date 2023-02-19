// const dbConfig = require("../config/db.config.js");

// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

exports.questions = require('./questions.js');
exports.answers = require('./answers.js');
