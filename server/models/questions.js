const {questions} = require('../../sequelize/models');
const sequelize = require('sequelize');

console.log('db model questions:', questions)

module.exports = {
  queryQuestions: (query) => {
    const count = query.count ? query.count : 30;
    const page = (query.page ? query.page : 1) - 1;

    return questions.findAll({
      where: { product_id: query.product_id },
      limit: count,
      offset: page*count
    });
  },
  insertQuestions: (question) => {
    //return axios.post('/qa/questions', question)
  },
  incrementQuestionHelfulness: (question_id) => {
    //return axios.put(`/qa/questions/${question_id}/helpful`)
  },
  toggleReported: (question_id) => {
    //return axios.put(`/qa/questions/${question_id}/report`)
  },
}