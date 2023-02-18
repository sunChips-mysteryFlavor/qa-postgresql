'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  questions.init({
    question_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: DataTypes.INTEGER,
    question_body: DataTypes.INTEGER,
    question_date: DataTypes.DATE,
    asker_name: DataTypes.STRING,
    question_helpfulness: DataTypes.INTEGER,
    reported: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'questions',
  });
  return questions;
};