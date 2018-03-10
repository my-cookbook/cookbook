var Nightmare = require("nightmare");
var expect = require("chai").expect;

it("should present a link to course catalog after login", function(done) {
    new Nightmare({ show: true })
      .goto("http://localhost:3030/login")
      // Enter username.
      .type("#userEmail", "blee@crownbio.com")
      // Enter password.
      .type("#userPassword", "Iplay2win")
      // Click the login button
      .click("#loginButton")
      // Evaluate the following selector
      .evaluate(function() {
        // Assert the "learn" link can be found
        return document.querySelector("a[href='/create-recipe']");
      })
      .then(function(link) {
        expect(link).to.not.equal(undefined);
        done();
      });
  });