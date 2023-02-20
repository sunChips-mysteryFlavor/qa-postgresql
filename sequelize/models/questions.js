'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.answers, { foreignKey:'question_id'})
    }
  }
  questions.init({
    question_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: DataTypes.INTEGER,
    question_body: DataTypes.STRING,
    question_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    asker_name: DataTypes.STRING,
    question_helpfulness: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    reported: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'questions',
  });
  return questions;
};