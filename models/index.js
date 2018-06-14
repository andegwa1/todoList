// Package declaration
var mongoose = require("mongoose");
mongoose.set('debug', true);
// mongoose.connect('mongodb://localhost/todo-api');

// DB Config
var db = require('../config/database');
mongoose.connect(db.mongoURI);

mongoose.Promise = Promise;

// Used to export the todo model out to the main app.js
module.exports.Todo = require("./todo");