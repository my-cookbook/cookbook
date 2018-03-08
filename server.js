// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
require('dotenv').config()
var express = require("express");
var bodyParser = require("body-parser");
var session = require('express-session');
var db = require("./models");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(session({
	secret: 'c00kb00k',
	resave: true,
	saveUninitialized: false,
}))

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//set up handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Static directory
app.use(express.static("public"));

// Routes
// =============================================================

const apiroutes = require("./routes/api-routes.js");
const htmlroutes = require("./routes/html-routes.js");
app.use(apiroutes);
app.use(htmlroutes);



// Starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("Listening on port " + PORT);
	})
})
