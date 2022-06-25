var express = require('express');
var router = express.Router();


//const data= require('./initial.json');
//var recipeList = JSON.parse('./initial.json');
var fs = require("fs");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
  var data = fs.readFileSync('./initial.json', 'utf-8');
  res.send('user info is ' + JSON.parse(data)[0].title)
})

// var server = router.listen(8081, function () {
//   var host = server.address().address
//   var port = server.address().port
//   console.log("url is http://%s:%s", host, port)

// })


module.exports = router;

// do this later, fix GET first

router.delete('/users', function(req, res, next) {
  var user = JSON.parse(req.body)
  res.send('user is deleted : ' + user.name)
});

// router.post('/posts', function(req, res, next) {
//   res.send('respond with a resource');
// });


