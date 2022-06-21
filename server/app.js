var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { Http } = require('@mui/icons-material');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;



var initialState = [
    {
        title: "Udon Soup",
        ingredients: [
        "5 cups water",
        "5 teaspoons instant dashi granules",
        "2 tablespoons dark soy sauce",
        "1 pound dried udon noodles",
        "1/4 cup green onions, thinly sliced"
        ],
        instructions: [
        "Cook udon noodles according to the instructions on the packaging.",
        "Bring a large pot of water to a boil.",
        "Add in dashi granules to the water.",
        "Divide noodles and garnish with green onions and seven-spice."
        ],
        id: 1
    },
    {
        title: "Teriyaki Chicken",
        ingredients:[
            "4 chicken thighs", 
            "1 tablespoon sesame or vegetable oil",
            "1/3 cup soy sauce",
            "1/3 cup sake"
    ],
        instructions:[
            "Remove excess fat from chicken thighs",
            "Cook for 5-7 minutes or until chicken has browned.",
            "Empty the contents of the masala packet in the boiling water",
            "Pour the teriyaki sauce into the pan and bring to a boil over medium-high heat.", 
            "Serve over rice or noodles."
        ],
        id: 2
    }
]


