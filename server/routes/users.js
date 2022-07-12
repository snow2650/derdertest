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

// const mongoose    = require("mongoose");
// const express     = require("express");
// const bodyParser  = require("body-parser");

// //const db          = require('./config/db');

// const Recipe        = require('./models/book');

// const app         = express();

// app.use(bodyParser.urlencoded({extended: true}));

// app.route('/')
//     .get((req, res) => {
//         Recipe.find({}).then(docs => res.json(docs))
//     })
//     // .post((req, res) => {
//     //     let b = new Book({
//     //         title: req.body.title,
//     //         author: req.body.author,
//     //         genre: req.body.genre
//     //     })

//     //     b.save()
//     //         .then(doc => console.log(doc))
//     //         .catch(err => console.error(err))
//     //     res.json(req.body)
//     // })
