const {answers} = require('../models');

module.exports = {
  get: (req, res) => {
    let queryResponse = {
      question: String(req.params.question_id),
      page: req.query.page > 1 ? req.query.page : 1,
      count: req.query.count === 5 ? '5' : String(req.query.count),
      results: []
    }
    answers.queryAnswers(req.params.question_id,req.query)
      .then((result) => {
        queryResponse.results = JSON.parse(JSON.stringify(result));

        res.status(200).send(queryResponse);
      }).catch((error) => {
        res.status(404).send(error);
      })
  },

  post: (req, res) => {
    answers.insertAnswers(req.params.question_id,req.body)
      .then(() => {
        res.status(201).send();
      }).catch((error) => {
        res.status(404).send(error);
      })
  },

  put: (req, res) => {
    answers.incrementAnswerHelfulness(req.params.answer_id)
      .then(() => {
        res.status(204).send();
      }).catch((error) => {
        res.status(404).send(error);
      })
  },

  remove: (req, res) => {
    answers.toggleReported(req.params.answer_id)
      .then(() => {
        res.status(204).send();
      }).catch((error) => {
        res.status(404).send(error);
      })
  },
};