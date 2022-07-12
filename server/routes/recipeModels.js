const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    title: {
        type: String,
        // required: true,
        //lowercase: true
    },
    ingredients: {
        type: String,
        // required: true,
        //lowercase: true
    },
    instructions: {
        type: String,
        // required: true,
        //lowercase: true
    },
    id: {
        type: Number
    }
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);