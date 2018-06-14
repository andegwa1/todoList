// Package declaration
var mongoose = require("mongoose");

// Declaring our schema
var todoSchema = new mongoose.Schema({
    name :{
        type: String,
        required: "Name cannot be blank!"
    },
    completed :{
        type: Boolean,
        default: false
    },
    created_date :{
        type: Date,
        default: Date.now
    }
});


// Compiling the model
var Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;