const {answers,answer_photos} = require('../../sequelize/models');

module.exports = {
  queryAnswers: (question_id, query) => {
    const count = query.count === 5 ? 5 : query.count;
    const page = (query.page ? query.page : 1) - 1;
    return answers.findAll({
      where: { question_id: question_id, reported: false },
      limit: count,
      offset: page*count,
      attributes: [
        'answer_id',
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
      }],
      order:[
        [{ model: answer_photos, as: 'photos'},'a_photo_id','ASC'],
      ]
    });
  },
  insertAnswers: (question_id,data) => {
    return answers.create({
      product_id:data.product_id,
      question_body:data.body,
      asker_name:data.name,
      asker_email:data.email
    })
  },
  incrementAnswerHelfulness: (answer_id) => {
    return answers.increment('helpfulness',{
      by: 1,
      where: {answer_id:answer_id}
    })

  },
  toggleReported: (answer_id) => {
    return answers.update({reported: true},{
      where:{answer_id:answer_id}
    })
  },
}