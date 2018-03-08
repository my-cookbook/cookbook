$(document).ready(function () {
    // Getting a reference to the input field where user creates a new account
    var newFirstNameInput = $("input#inputFirstName");
    var newLastNameInput = $("input#inputLastName");
    var newEmailInput = $("input#inputEmail");
    var newPasswordInput = $("input#inputPassword");

    //Getting a refrence to the recipie form where user creates a new Recepie
    var NewRecepieTitle = $("#RecipeTitle");
    var RecipeDescription = $("#recepedescription");
    var RecipeProcedure = $("#Procedure")
    var Ingredient1 = $("#Ingredient1");
    var Ingredient2 = $("#Ingredient2");
    var Ingredient3 = $("#Ingredient3");
    var measurement1 = $("#measurement1");
    var measurement2 = $("#measurement2");
    var measurement3 = $("#measurement3");
    var quantity1 = $("#quantity1");
    var quantity2 = $("#quantity2");
    var quantity3 = $("#quantity3");
  //  var Instruction = $("#Instruction");
    var Notes = $("#Notes");

    // Adding event listeners for creating new users
    $(document).on("submit", "#createAccountForm", insertUser);

    // This function inserts a new todo into our database and then updates the view
    function insertUser(event) {
        event.preventDefault();
        var user = {
            first_name: newFirstNameInput.val().trim(),
            last_name: newLastNameInput.val().trim(),
            email: newEmailInput.val().trim(),
            password: newPasswordInput.val().trim(),
        };

        console.log(user);

        $.post("/api/user", user);
        newFirstNameInput.val("");
        newLastNameInput.val("");
        newEmailInput.val("");
        newPasswordInput.val("");
    }

    // Getting a reference to the input field where user logs in
    var existingUserEmail = $("input#userEmail");
    var existingUserPassword = $("input#userPassword");

    // Adding event listeners for logging in as a user
    $(document).on("click", "#loginButton", checkForUser);

    function checkForUser(event) {

        event.preventDefault();

        var userCredentials = {
            email: existingUserEmail.val().trim(),
            password: existingUserPassword.val().trim(),
        };

        // if the user's registered redirect to user dashboard page
        $.post("/api/user/credentialcheck", userCredentials).then(function (doesUserExist) {
            console.log(doesUserExist);
            // still need to add code that redirects user to the user dashboard page
        })
        existingUserEmail.val("");
        existingUserPassword.val("");
    };

    //Adding new recipes 
    $(document).on("submit", "#createNewRecipe", insertRecipe)

    // This function inserts a new recipe into our database and then updates the view
    function insertRecipe(event) {
        event.preventDefault();
        var newRecipe = {
            NewRecepieTitle: NewRecepieTitle.val().trim(),
            RecipeDescription: RecipeDescription.val().trim(),
            RecipeProcedure: RecipeProcedure.val().trim(),
            ingredients: [{
                ingredientName: Ingredient1.val().trim(),
                quantity: quantity1.val().trim(),
                measurement: measurement1.val().trim(),
            },
            {
                ingredientName: Ingredient2.val().trim(),
                quantity: quantity2.val().trim(),
                measurement: measurement2.val().trim(),
            },
            {
                ingredientName: Ingredient3.val().trim(),
                quantity: quantity3.val().trim(),
                measurement: measurement3.val().trim(),
            },
            ],
      //      Instruction: Instruction.val().trim(),
            Notes: Notes.val().trim(),
            UserId: 1
        };

        console.log(newRecipe);

        $.post("/api/recipes/1", newRecipe)

    NewRecepieTitle.val("");
     RecipeDescription.val("");
    Ingredient1.val("");
     Ingredient2.val("");
    Ingredient3.val("");
    measurement1.val("");
    measurement2.val("");
     measurement3.val("");
    quantity1.val("");
    quantity2.val("");
     quantity3.val("");
    RecipeProcedure.val("");
     Notes.val("") ;
    }

});