const {questions} = require('../models');

module.exports = {
  get: (req, res) => {
    let queryResponse = {
      product_id: String(req.query.product_id),
      results: []
    }
    questions.queryQuestions(req.query)
      .then((result) => {
        let nonMetaResult = JSON.parse(JSON.stringify(result));
        nonMetaResult.forEach(question => {
          let newAnswersObj = {};
          question.answers.forEach(answer => {
            answer.photos = answer.photos.map((photo) => photo.url)
            newAnswersObj[answer.id] = answer
          });
          question.answers = newAnswersObj
        })
        queryResponse.results = nonMetaResult
        res.status(200).send(queryResponse);
      }).catch((error) => {
        res.status(404).send(error);
      })
  },

  post: (req, res) => {
    questions.insertQuestions(req.body)
      .then(() => {
        res.status(201).send();
      }).catch((error) => {
        res.status(404).send(error);
      })
  },

  put: (req, res) => {
    questions.incrementQuestionHelfulness(req.params.question_id)
      .then(() => {
        res.status(204).send();
      }).catch((error) => {
        res.status(404).send(error);
      })
  },

  remove: (req, res) => {
    questions.toggleReported(req.params.question_id)
      .then(() => {
        res.status(204).send();
      }).catch((error) => {
        res.status(404).send(error);
      })
  },
};