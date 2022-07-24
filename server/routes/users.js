var express = require('express');
var router = express.Router();
var fs = require("fs");
var data = JSON.parse(fs.readFileSync('./initial.json', 'utf-8'));

router.get('/', function(req, res, next) {
  res.send(data)
})

module.exports = router;

router.delete('/', function(req, res, next) {
  /* console.log(" users delete")
  console.log("req.body = ", req.body)
  console.log("users delete end")*/
  const deletedData = data.findIndex(p => p.id == req.body)
  data.splice(deletedData, 1)
  res.send(data)
});


router.post('/', function(req, res, next) {
  data.push(req.body) 
  /* console.log("users post")
  console.log("req.body = ", req.body)
  console.log("users post end")*/
  res.send(data)       //req.body=>data
});