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
  insertQuestions: (data) => {
    return questions.create({
      product_id:data.product_id,
      question_body:data.body,
      asker_name:data.name,
      asker_email:data.email
    })
  },
  incrementQuestionHelfulness: (question_id) => {
    return questions.increment('question_helpfulness',{
      by: 1,
      where: {question_id:question_id}
    })

  },
  toggleReported: (question_id) => {
    return questions.update({reported: true},{
      where:{question_id:question_id}
    })
  },
}


