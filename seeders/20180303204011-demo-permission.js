'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      // return queryInterface.bulkInsert('Person', [{
      //   name: 'John Doe',
      //   isBetaMember: false
      // }], {});
      return queryInterface.bulkInsert('permissionLevels', [{
        permissionType: 'User',
        permissionDescription: 'regular person, yo',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkDelete('permissionLevels', null, {});
    
  }
};
