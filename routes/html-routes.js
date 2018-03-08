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
    //check if logged in
    //if logged in
    //get the user id
    UserId = 1;

    db.User.findAll({
        where: {
            id: UserId,
        },
        include: [
        {
            model:db.Recipe,
            include: [{model:db.Ingredient}]
        }
        ]
    }).then(function (data) {
        // res.json(data);
        console.log(JSON.stringify(data, null, " "));
         res.render("dashboard", {user: data});
    }).catch(function (err) {
        console.log(err);
    })
    //if not logged in
    // res.render("login");
});

router.get("/create-recipe", function(req, res) {
    res.render("create-recipe");
})
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
        // res.json(data);
         res.render("recipes", {recipes: data});
    })
    // save the data in an object and pass it into the handlebars template
    // res.render("recipes", {recipes: recipes});
})
router.get("/:user/recipes/:recipe", function (req, res) {
    var user = req.params.user;
    var recipe = req.params.recipe;
    res.render("single");
})

router.get("/my-recipe/:id", function (req,res) {
    var id = req.params.id;

    db.Recipe.findOne({
        where: {
            id: id,
        },
        include: [db.Ingredient]
    }).then(function(data) {

        res.render("single", {recipe: data})
    })

})

router.get("*", function (req,res) {
    res.render("404");
})


module.exports = router;