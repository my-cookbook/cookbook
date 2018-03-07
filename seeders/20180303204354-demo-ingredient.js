'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('ingredients', [{
        quantity: '1',
        measurement: 'each',
        name: 'steak',
        recipeID: 1,
      },

      {
        quantity: '3',
        measurement: 'each',
        name: 'carrots',
        recipeID: 2,
      },

      {
        quantity: '2',
        measurement: 'cups',
        name: 'spinach',
        recipeID: 2,
      },

      {
        quantity: '3',
        measurement: 'tbsp',
        name: 'dressing',
        recipeID: 2,
      },

      {
        quantity: '1',
        measurement: 'cup',
        name: 'cereal',
        recipeID: 3,
      },

      {
        quantity: '.5',
        measurement: 'cup',
        name: 'milk',
        recipeID: 3,
      },

      {
        quantity: '3',
        measurement: 'each',
        name: 'eggs',
        recipeID: 4,
      },

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('Ingredients', null, {});
  }
};
