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
router.post("/api/user/credentialcheck", function doesUserExist(req, res) {

    return db.User.count({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    }).then(function (count) {
        console.log(count)
        if (count != 1) {
            res.json(false);
        } else {
            res.json(true);
        };
    });
});

// GET route for getting all of the todos

router.post("/api/user", function (req, res) {

    console.log('hello', req.body);

    db.User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        // everyone is a regular user for now
        PermissionLevelId: 3,
    }).then(function () {
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
router.post("/api/recipes/:id", function (req, res) {
    // hardcoded UserId for now
    console.log("req ", req.body);
    // create a recipe
    db.Recipe.create({  //zp db.recipes  
        //id: recipe.title,
        recipeTitle: req.body.NewRecepieTitle, //zp was NewRecepieTitl
        recipeDescription: req.body.RecipeDescription,
        recipeProcedure: req.body.RecipeProcedure,
        recipeNotes: req.body.Notes,
        //  UserId: parseInt(req.body.UserId),
    }).then(function (results) //zp from res
    {
        // with the created recipe id, add ingredients
        console.log(results.dataValues);
        // we will pass data into req.body from the scripts.js
        //loop the ingredients variable to add all the ingredients
        var recipe = req.body;
        for (var i = 0; i < recipe.ingredients.length; i++) {
            db.Ingredient.create({
                quantity: recipe.ingredients[i].quantity,
                measurement: recipe.ingredients[i].measurement,
                name: recipe.ingredients[i].ingredientName,
                RecipeId: results.dataValues.id //zp from data.id 
            }).then(function (results) //zp from res
            {
                // can only send one response, but can't compile each result as these happen asynchronously
                // so any response outside the db function runs imediately;
                // maybe use recursion and callbacks here?
                // I'm not sure it's important to return anything though
                res.json(results);
            }).catch(function (err) {
                res.json(err);
            })

        }

    })//.catch(function (err) {
     //   res.json(err);
   // })
});

module.exports = router;