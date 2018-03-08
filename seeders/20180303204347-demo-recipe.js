'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

      return queryInterface.bulkInsert('Recipes', [{
        recipeTitle: 'Steak',
        recipeDescription: 'mmm, steak',
        recipeProcedure: '<ul><li>cook the steak</li></ul>',
        recipeNotes: "notes",
        UserId: 1,
      },
      {
        recipeTitle: 'Salad',
        recipeDescription: 'eat your veggies',
        recipeProcedure: '<ul><li>Chop the veggies</li><li>Put them in a bowl</li></ul>',
        recipeNotes: "notes",
        UserId: 1,
      },
      {
        recipeTitle: 'Cereal',
        recipeDescription: 'lucky charms is the best',
        recipeProcedure: '<ul><li>Put the cereal in a bowl</li><li>pour milk on it</li></ul>',
        recipeNotes: "notes",
        UserId: 4,
      },
      {
        recipeTitle: 'scrambled eggs',
        recipeDescription: '',
        recipeProcedure: '<ul><li>You know how to cook eggs, man.</li></ul>',
        recipeNotes: "notes",
        UserId: 2,
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Recipes', null, {});
  }
};
