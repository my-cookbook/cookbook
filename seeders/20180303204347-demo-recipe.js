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
        recipeNote: 'mmm, steak',
        recipeSteps: '<ul><li>cook the steak</li></ul>',
        UserId: 1,
      },
      {
        recipeTitle: 'Salad',
        recipeNote: 'eat your veggies',
        recipeSteps: '<ul><li>Chop the veggies</li><li>Put them in a bowl</li></ul>',
        UserId: 1,
      },
      {
        recipeTitle: 'Cereal',
        recipeNote: 'lucky charms is the best',
        recipeSteps: '<ul><li>Put the cereal in a bowl</li><li>pour milk on it</li></ul>',
        UserId: 4,
      },
      {
        recipeTitle: 'scrambled eggs',
        recipeNote: '',
        recipeSteps: '<ul><li>You know how to cook eggs, man.</li></ul>',
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
