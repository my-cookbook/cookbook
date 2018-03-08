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
        name: 'lemon',
        recipeID: 1,
      },
      {
        quantity: '1',
        measurement: 'tsp',
        name: 'steak seasoning',
        recipeID: 1,
      },
      {
        quantity: '1',
        measurement: 'lbs',
        name: 'spinach',
        recipeID: 1,
      },
      //recipeId= 2
      {
        quantity: '3',
        measurement: 'each',
        name: 'strawberry',
        recipeID: 2,
      },
     //  recipeId = 2
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
        quantity: '3',
        measurement: 'each',
        name: 'Almond Topping',
        recipeID: 2,
      },
      {
        quantity: '3',
        measurement: 'tbsp',
        name: 'dressing',
        recipeID: 2,
      },

      //  recipeId = 3 for cereal
      {
        quantity: '1',
        measurement: 'cup',
        name: 'cereal',
        recipeID: 3,
      },
      //recipeId = 3 for cereal
      {
        quantity: '1',
        measurement: 'cup',
        name: 'nuts',
        recipeID: 3,
      },
    //  recipeId = 3 for cereal
      {
        quantity: '.5',
        measurement: 'cup',
        name: 'milk',
        recipeID: 3,
      },
      //recipeId = 4 scrambled eggs
      {
        quantity: '3',
        measurement: 'qt',
        name: 'egg',
        recipeID: 4,
      },
      //recipeId = 4 scrambled eggs
      {
        quantity: '1',
        measurement: 'tbs',
        name: 'olive oil',
        recipeID: 4,
      },
      //recipeId = 5 Crepes
      {
        quantity: '1',
        measurement: 'tbs',
        name: 'baking powder',
        recipeID: 5,
      },
      {
        quantity: '1000',
        measurement: 'tbs',
        name: 'Nutella',
        recipeID: 5,
      },
      //recipeId = 5 Crepes
      {
        quantity: '1',
        measurement: 'tbs',
        name: 'purpose flour',
        recipeID: 5,
      },
      //recipeId = 5 Crepes
      {
        quantity: '1',
        measurement: 'tbs',
        name: 'eggs',
        recipeID: 5,
      },
      //recipeId = 6 Chicken and Prosciutto Club
      {
        quantity: '1',
        measurement: 'qt',
        name: 'chicken',
        recipeID: 6,
      },//recipeId = 6 Chicken and Prosciutto Club
      {
        quantity: '1',
        measurement: 'qt',
        name: 'prosciutto',
        recipeID: 6,
      },//recipeId = 6 Chicken and Prosciutto Club
      {
        quantity: '1',
        measurement: 'qt',
        name: 'tomato',
        recipeID: 6,
      },
      {
        quantity: '1',
        measurement: 'qt',
        name: 'bell Pepper',
        recipeID: 6,
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
