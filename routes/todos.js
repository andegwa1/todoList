var express = require("express");
var router = express.Router();
var db = require("../models");

// Using the refactored functions in the todos.js file under the helpers folder
var helpers = require("../helpers/todos");

// Defining routes for the list of all todo items & creating new ones
router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo)

// Defining routes for showing, updating, & deleting one item in the todo list
router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)
    
module.exports = router;