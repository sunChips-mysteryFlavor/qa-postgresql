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
      this.hasMany(models.answer_photos, { foriegnKey: 'answer_id' })
      this.belongsTo(models.questions, { foriegnKey:'question_id' })
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