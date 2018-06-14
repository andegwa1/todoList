// Package declaration
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// Declaration of the main routes
var todoRoutes = require("./routes/todos");


// Configuring the app for body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuring the app for markup & styling 
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

// Home page
app.get('/', function(req, res){
    res.sendFile("index.html");
});

// Setting the route for the main API routes to "/api/routes"
app.use('/api/todos', todoRoutes);

// Starts the server
var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("App is running on " + process.env.PORT);
});

