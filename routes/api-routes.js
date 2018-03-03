// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the todos
  app.get("/", function(req, res) {
    res.send("Welcome to the cookbook app");
  });


  // POST route for saving a user. We can create an account with the data in req.body
  app.post("/api/user", function(req, res) {

    console.log('hello', req.body);

    db.User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.end();
    });
  });
};