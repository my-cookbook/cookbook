// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const db = require("../models");
const express = require('express');
const router = express.Router();
const path = require("path");
const uuidv4 = require('uuid/v4');

// var formidable = require('formidable');

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


router.post("/uploadimage", function(req,res) {

    var mimetype = req.files.recipeimage.mimetype;
    var ext;

    // check if the mimetype is allowed and set the ext
    if (mimetype === "image/jpeg") {
        ext = ".jpg";
    } else if (mimetype === "image/png") {
        ext = ".png";
    } else {
        return res.status(415).send(err);
    }

    if (!req.files)
        return res.status(400).send('No files were uploaded.');
     
      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.recipeimage;
    var filename = uuidv4();
      // Use the mv() method to place the file somewhere on your server

      var pathname = path.join(__dirname,'../public/images', filename + ext);
      console.log(pathname);
      sampleFile.mv(pathname, function(err) {
        if (err)
          return res.status(500).send(err);
     
        res.json(pathname);
      });
});

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
        recipeTitle: recipe.NewRecipeTitle,
        rrecipeNote: recipe.RecipeDescription,
        recipeSteps: recipe.Instruction,
        recipeNote: recipe.Notes,
        UserId: UserId,
    }).then(function (data) {
        // with the created recipe id, add ingredients
        res.json(recipe.Ingredients);

        // we will pass data into req.body from the scripts.js
        //loop the ingredients variable to add all the ingredients
        for (var i = 0; i < recipe.Ingredients.length; i++) {
            db.Ingredient.create({
                name: recipe.Ingredients[i].name,
                measurement: recipe.Ingredients[i].measurement,
                quantity: recipe.Ingredients[i].quantity,
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