const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    //lowercase: true
},
ingredients: {
    type: String,
    required: true,
    //lowercase: true
},
instructions: {
    type: String,
    required: true,
    //lowercase: true
},
id: {
    type: Number
}
});

const recipeModel = mongoose.model("users", recipeSchema);
module.exports = recipeModel;
