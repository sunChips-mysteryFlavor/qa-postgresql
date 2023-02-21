const {answers,answer_photos} = require('../../sequelize/models');

module.exports = {
  queryAnswers: (params, query) => {
    const count = query.count ? query.count : 30;
    const page = (query.page ? query.page : 1) - 1;

    return answers.findAll({
      where: { product_id: params.product_id },
      limit: count,
      offset: page*count,
      attributes: [
        'answer_id  ',
        'body',
        'date',
        'answerer_name',
        'helpfulness',
      ],
      include:[{
        model:answer_photos,
        as: 'photos',
        attributes:[
          ['a_photo_id', 'id'], 
          'url'
        ]
      }]
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