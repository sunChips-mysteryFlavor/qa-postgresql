const {answers} = require('../../sequelize/models');

module.exports = {
  queryAnswers: (query) => {
    const count = query.count ? query.count : 30;
    const page = (query.page ? query.page : 1) - 1;

    return answers.findAll({
      where: { product_id: query.product_id },
      limit: count,
      offset: page*count
    });
  },
  insertAnswers: (data) => {
    return answers.create({
      product_id:data.product_id,
      question_body:data.body,
      asker_name:data.name,
      asker_email:data.email
    })
  },
  incrementAnswerHelfulness: (question_id) => {
    return answers.increment('question_helpfulness',{
      by: 1,
      where: {question_id:question_id}
    })

  },
  toggleReported: (question_id) => {
    return answers.update({reported: true},{
      where:{question_id:question_id}
    })
  },
}