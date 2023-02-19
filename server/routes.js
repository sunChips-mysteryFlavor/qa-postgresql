const ctrl = require('./controllers');
const router = require('express').Router();

//Questions
router.get('/questions', ctrl.questions.get);
router.post('/questions', ctrl.questions.post);
router.put('/questions/:question_id/helpful', ctrl.questions.put);
router.put('/questions/:question_id/report', ctrl.questions.remove);

//Answers
// router.get('/questions/:question_id/answers', ctrl.answers.get);
// router.post('/questions/:question_id/answers', ctrl.answers.post);
// router.put('/answers/:answer_id/helpful', ctrl.answers.put);
// router.put('/answers/:answer_id/report', ctrl.answers.remove);

module.exports = router;