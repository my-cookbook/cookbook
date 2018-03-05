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

// POST route for checkingif a user exists. 
router.post("/api/user/credentialcheck", function doesUserExist (req, res) {

    return db.User.count({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    }).then( function (count) {
    console.log(count)
    if (count != 1) {
        res.json(false);
    } else {
        res.json(true);
    };
    });
});

// GET route for getting all of the todos

router.post("/api/user", function(req, res) {

	console.log('hello', req.body);

	db.User.create({
	  first_name: req.body.first_name,
	  last_name: req.body.last_name,
	  email: req.body.email,
	  password: req.body.password,
	  // everyone is a regular user for now
	  PermissionLevelId: 3,
	}).then(function() {
	  res.end();
	});
});

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

    var recipe = req.body;
    recipe.UserId = UserId
    // create a recipe
    db.Recipe.create({
        id: recipe.title,
        recepiesTitle: recipe.body,
        recepiesNote: recipe.UserId,
        recepiesSteps:"" ,
        userId: "",
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