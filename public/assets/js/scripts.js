$(document).ready(function () {
  // Getting a reference to the input field where user creates a new account
  var newFirstNameInput = $("input#inputFirstName");
  var newLastNameInput = $("input#inputLastName");
  var newEmailInput = $("input#inputEmail");
  var newPasswordInput = $("input#inputPassword");

  //Getting a refrence to the recipie form where user creates a new Recepie
  var NewRecepieTitle = $("input#RecipeTitle");
  var RecipeDescription = $("input#recepedescription");
  var Ingredient1 = $("input#Ingredient1");
  var Ingredient2 = $("input#Ingredient2");
  var Ingredient3 = $("input#Ingredient3");
  var measurement1 = $("input#measurement1");
  var measurement2 = $("input#measurement2");
  var measurement3 = $("input#measurement3");
  var quantity1 = $("input#quantity1");
  var quantity2 = $("input#quantity2");
  var quantity3 = $("input#quantity3");
  var Instruction = $("input#Instruction");
  var Notes = $("input#Notes");


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


  //Adding new recipes 
  $(document).on("submit", "#createNewRecipe", insertRecipe)

  // This function inserts a new recipe into our database and then updates the view
  function insertRecipe(event) {
    event.preventDefault();
    var newRecipe = {
      NewRecepieTitl: NewRecepieTit.val().trim(),
      RecipeDescription: RecipeDescription.val().trim(),
      Ingredients: [{
          ingredientName: Ingredient1.val().trim(),
          quantity: quantity1.val().trim(),
          measurement: measurement1.val().trim(),
        },
        {
          ingredientName2: Ingredient2.val().trim(),
          quantity: quantity2.val().trim(),
          measurement: measurement2.val().trim(),
        },
        {
          ingredientName3: Ingredient3.val().trim(),
          quantity: quantity3.val().trim(),
          measurement: measurement3.val().trim(),
        },
      ],
      Instruction: Instruction.val().trim(),
      Notes: Notes.val().trim(),
    };

    console.log(newRecipe);

    $.post("/api/recipes/", newRecipe);
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
    Instruction.val("");
    Notes.val("");

  }

});