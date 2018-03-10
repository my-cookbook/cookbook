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
        res.redirect('/login',);
    }
}

//use express router?

// Routes
// =============================================================

// GET route for getting all of the todos
router.get("/", function (req, res) {
    if (isAuthed(req.session)) {
        console.log(true);
        res.redirect("/dashboard");
    } else {
        console.log(false);
        res.redirect('/login');
    };
});

router.get('/login', function(req, res) {
    return res.render('login',  {data: req.session.userId});
});

router.get("/dashboard", requiresLogin, function (req, res) {
    console.log("this is the DashboardUser id:", req.session.userId);

    UserId = req.session.userId;

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

router.get("/create-recipe", requiresLogin, function(req, res) {
 
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

router.get("/my-recipe/:id", requiresLogin, function (req,res) {
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