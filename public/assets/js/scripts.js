$(document).ready(function() {
  // Getting a reference to the input field where user creates a new account
  var newFirstNameInput = $("input#inputFirstName");
  var newLastNameInput = $("input#inputLastName");
  var newEmailInput = $("input#inputEmail");
  var newPasswordInput = $("input#inputPassword");

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
  };

  // Getting a reference to the input field where user logs in
  var existingUserEmail = $("input#userEmail");
  var existingUserPassword = $("input#userPassword");  

  // Adding event listeners for logging in as a user
  $(document).on("submit", "#logInForm", checkForUser);

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

});



