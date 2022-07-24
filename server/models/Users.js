const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        //lowercase: true
    },
    ingredients: {
        type: Array,
        required: true,
        //lowercase: true
    },
    instructions: {
        type: Array,
        required: true,
        //lowercase: true
    },
    time: {
        type : Number,
        required: true,
    },
    id: {
        type: Number
    }
});

const UserModel = mongoose.model("test", UserSchema);
module.exports = UserModel;
