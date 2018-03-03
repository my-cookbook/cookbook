// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const db = require("../models");
const express = require('express');
const router = express.Router();

//use express router?

// Routes
// =============================================================

// GET route for getting all of the todos
router.get("/", function (req, res) {
    res.send("Welcome to the cookbook app");
});

router.post("/api/user", function(req, res) {

	console.log('hello', req.body);

	db.Users.create({
	  first_name: req.body.first_name,
	  last_name: req.body.last_name,
	  email: req.body.email,
	  password: req.body.password
	}).then(function() {
	  res.end();
	});
});

//we can't get local storage access on the server
//pass in the local variable from public scripts.js ajax call
router.get("/:user/recipes", function (req, res) {
    var user = req.params.user;
    // here we'll use the user data to query the database for all the recipes owned by that user
    var recipes = {};
    var data = {};
    // getting all recipes by the user, includeing all ingredients of that recipe
    db.Recipe.findAll({
        where: {
            UserId: user,
        },
        include: [db.Ingredient]
    }).then(function (data) {
        res.json(data);
    })
    // save the data in an object and pass it into the handlebars template
    // res.render("recipes", recipes);
})
router.get("/:user/recipes/:recipe", function (req, res) {
    var user = req.params.user;
    var recipe = req.params.recipe;
    res.render("single");
})
router.post("/createUser", function (req, res) {
    db.User.create({
        name: "natalie"
    }).then(function (data) {
        res.json(data);
    }).catch(function (err) {
        res.json(err);
    })
})
router.post("/api/recipes/", function (req, res) {
    // hardcoded UserId for now

    var UserId = 1;

    var recipe = {
        title: "A hardcoded recipe",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, debitis.",
        ingredients: [{
                title: "ingredient 1",
                body: "Lorem ipsum dolor sit amet."
            },
            {
                title: "ingredient 2",
                body: "Lorem ipsum dolor sit amet."
            },
            {
                title: "ingredient 2",
                body: "Lorem ipsum dolor sit amet."
            }
        ],
        UserId
    }

    // create a recipe
    db.Recipe.create({
        title: recipe.title,
        body: recipe.body,
        UserId: recipe.UserId
    }).then(function (data) {
        // with the created recipe id, add ingredients

        // we will pass data into req.body from the scripts.js
        //loop the ingredients variable to add all the ingredients
        for (var i = 0; i < recipe.ingredients.length; i++) {
            db.Ingredient.create({
                title: recipe.ingredients[i].title,
                body: recipe.ingredients[i].body,
                RecipeId: data.id
            }).then(function (data) {
                // can only send one response, but can't compile each result as these happen asynchronously
                // so any response outside the db function runs imediately;
                // maybe use recursion and callbacks here?
                // I'm not sure it's important to return anything though
                res.json(data);
            }).catch(function (err) {
                res.json(err);
            })

        }

    }).catch(function (err) {
        res.json(err);
    })
});

module.exports = router;