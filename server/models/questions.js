const {questions,answers,answer_photos} = require('../../sequelize/models');

module.exports = {
  queryQuestions: (query) => {
    const count = query.count ? query.count : 5;
    const page = (query.page ? query.page : 1) - 1;

    return questions.findAll({
      where: { product_id: query.product_id, reported: false },
      limit: count,
      offset: page*count,
      attributes: [
        'question_id',
        'question_body',
        'asker_name',
        'question_helpfulness',
        'reported'
      ],
      include: [
        {
          model:answers,
          attributes:[
            ['answer_id', 'id'],
            'body',
            'date',
            'answerer_name',
            'helpfulness',
          ],
          include:[{
            model:answer_photos,
            as: 'photos',
            attributes: ['url']
          }]
        }
      ],
      order:[
        [{ model: answers},'answer_id','ASC'],
        [answers,{ model: answer_photos, as: 'photos'},'a_photo_id','ASC'],
      ]
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


