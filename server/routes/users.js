var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


router.get('/:userId', function (req, res, next) {
  const foundUser = users.find(user => user.id === req.params.userId);
  return res
  .setHeader('Content-Type', 'application/json')
  .send(users);
  });
  router.post('/', function (req, res, next) {
  const user = { id: uuid(), name: req.body.name };
  users.push(user);
  return res
  .setHeader('Content-Type', 'application/json')
  .status(201)
  .send(user);
  })
