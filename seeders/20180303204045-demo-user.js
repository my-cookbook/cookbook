'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkInsert('Users', [{
        userName: 'John Doe',
        password: 'abcdefg',
        // createdAt: new Date(),
        // updatedAt: new Date(),
        permissionLevelId: 1
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.*/

      return queryInterface.bulkDelete('Users', null, {});
    
  }
};
