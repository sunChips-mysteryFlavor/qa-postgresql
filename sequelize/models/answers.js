'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  answers.init({
    answer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question_id: DataTypes.NUMBER,
    body: DataTypes.STRING,
    date: DataTypes.DATE,
    answerer_name: DataTypes.STRING,
    helpfulness: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'answers',
  });
  return answers;
};