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
      this.hasMany(models.answer_photos, { foreignKey: 'answer_id', as: 'photos'})
      this.belongsTo(models.questions, { foreignKey:'question_id' })
    }
  }
  answers.init({
    answer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question_id: DataTypes.INTEGER,
    body: DataTypes.STRING,
    date:{
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    answerer_name: DataTypes.STRING,
    helpfulness: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    answerer_email: DataTypes.STRING,
    reported: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'answers',
    timestamp:false
  });
  return answers;
};