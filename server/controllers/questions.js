const {questions} = require('../models');

module.exports = {
  get: (req, res) => {
    questions.queryQuestions(req.query)
      .then((result) => {
        console.log(result)
        // result.forEach(question => {
        //   console.log(question);
        //   let newAnswersObj = {};
        //   question.forEach(answer => {
        //     newAnswersObj[answer].id = answer
        //   });
        //   console.log('newAnswer', newAnswersObj)
        //   question.answers = newAnswersObj
        // })
        res.status(200).send(result);
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