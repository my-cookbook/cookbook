'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('ingredients', [{
        quantity: 'A new recipe',
        measurement: 'regular person, yo',
        recipeID: 1,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('ingredients', null, {});
  }
};
