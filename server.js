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
var fileUpload = require("express-fileupload");
var busboy = require("busboy");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(session({
	secret: 'c00kb00k',
	resave: true,
	saveUninitialized: false,
}))


// app.use(express.static(path.join(__dirname, 'public')));

// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// // parse application/json
app.use(bodyParser.json());

//set up handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// set up fileupload
app.use(fileUpload(
	{	
		safeFileNames: /\\/g,
		abortOnLimit: true,
	  	limits: { fileSize: 5 * 1024 * 1024 }, //limit 5MB
	}
));

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
