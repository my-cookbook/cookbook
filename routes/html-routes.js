// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const db = require("../models");
const express = require('express');
const router = express.Router();

function isAuthed(session) {
    console.log("this is the AuthUser id:", session.userId);
    return session && session.userId;
}

// authentication middleware
function requiresLogin(req, res, next) {
    if (isAuthed(req.session)) {
        return next();
    } else {
        res.redirect('/login');
    }
}

//use express router?

// Routes
// =============================================================

// GET route for getting all of the todos
router.get("/", function (req, res) {
    if (isAuthed(req.session)) {
        console.log(true);
        res.render("dashboard");
    } else {
        console.log(false);
        res.redirect('/login');
    };
});

router.get('/login', function(req, res) {
    return res.render('login');
})

router.get("/dashboard", requiresLogin, function (req, res) {
    console.log("this is the DashboardUser id:", req.session.userId);
    res.render('dashboard');
});

router.get("/create-recipe", function(req, res) {
    res.render("create-recipe");
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
        // res.json(data);
         res.render("recipes", {recipes: data});
    })
    // save the data in an object and pass it into the handlebars template
    // res.render("recipes", {recipes: recipes});
});

router.get("/:user/recipes/:recipe", function (req, res) {
    var user = req.params.user;
    var recipe = req.params.recipe;
    res.render("single");
});


module.exports = router;