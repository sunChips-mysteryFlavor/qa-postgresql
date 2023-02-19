const {answers} = require('../models');

module.exports = {
  get: (req, res) => {
    answers.queryAnswers(req.query)
      .then((result) => {
        res.status(200).send(result);
      }).catch((error) => {
        res.status(404).send(error);
      })
  },

  post: (req, res) => {
    answers.insertAnswers(req.body)
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