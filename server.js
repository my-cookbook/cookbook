// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
require('dotenv').config()
var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");
var fileUpload = require("express-fileupload");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//set up handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//file upload
app.use(fileUpload());

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
