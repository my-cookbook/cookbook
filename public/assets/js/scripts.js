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
  $(document).on("click", "#recipeFormSumbit", insertRecipe)

// This function inserts a new recipe into our database and then updates the view
  function insertRecipe(event) {
      event.preventDefault();
      console.log("formsub")
      var newRecipetest = {
        "NewRecipeTitle": "new recipe",
        "RecipeDescription": "description",
        "Instruction": "steps",
        "Notes": "note",
        "Ingredients": [
          {
            "measurement": "cup",
            "quantity": 1,
            "name": "things"
          },
          {
            "measurement": "tsp",
            "quantity": 3,
            "name": "stuff"
          },
          {
            "measurement": "pinch",
            "quantity": 1,
            "name": "junk"
          }
        ]

      }
      // var newRecipe = {
      //     NewRecepieTitl: NewRecepieTit.val().trim(),
      //     RecipeDescription: RecipeDescription.val().trim(),
      //     Ingredients: [{
      //             ingredientName: Ingredient1.val().trim(),
      //             quantity: quantity1.val().trim(),
      //             measurement: measurement1.val().trim(),
      //         },
      //         {
      //             ingredientName2: Ingredient2.val().trim(),
      //             quantity: quantity2.val().trim(),
      //             measurement: measurement2.val().trim(),
      //         },
      //         {
      //             ingredientName3: Ingredient3.val().trim(),
      //             quantity: quantity3.val().trim(),
      //             measurement: measurement3.val().trim(),
      //         },
      //     ],
      //     Instruction: Instruction.val().trim(),
      //     Notes: Notes.val().trim(),
      // };

      console.log(newRecipetest);

      $.post("/api/recipes/", newRecipetest).then(function(data) {
        console.log(data);
      })
      // NewRecepieTitle.val("");
      // RecipeDescription.val("");
      // Ingredient1.val("");
      // Ingredient2.val("");
      // Ingredient3.val("");
      // measurement1.val("");
      // measurement2.val("");
      // measurement3.val("");
      // quantity1.val("");
      // quantity2.val("");
      // quantity3.val("");
      // Instruction.val("");
      // Notes.val("");
  };
  $('.upload-btn').on('click', function (){
      $('#uploadImageInput').click();
  });

  $('#uploadImageInput').on('change', uploadimage);

  $(document).on("click", "#imageFormSubmit", uploadimage);

  function uploadimage(event) {
      event.preventDefault();

      //get the form data from the image form
      var myForm = document.getElementById('uploadForm');

      //post the image to the /uploadimage route
      $.ajax( {
        url: "/uploadimage",
        type: 'POST',
        data: new FormData( myForm ),
        processData: false,
        contentType: false
      }).done(function(data){
        $("#imagepath").html(data);
        $(".imageerror").html("");
      }).fail(function(error) {
        var errorMessage;
        console.log(error.status);

        switch(error.status) {
          case 413:
          errorMessage = "Image must be smaller than 5MB"
          break;
          case 415: errorMessage = "Unsupported File Type";
          break;
          default:
        }
        
        $(".imageerror").html(errorMessage);
      });
  };

});
