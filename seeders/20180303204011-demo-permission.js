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
      return queryInterface.bulkInsert('PermissionLevels', [
      {
        permissionType: 'Super Admin',
        permissionDescription: 'The boss',
      },
      {
        permissionType: 'Admin',
        permissionDescription: 'Developer',
      },
      {
        permissionType: 'User',
        permissionDescription: 'regular person, yo',
      }
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkDelete('PermissionLevels', null, {});
    
  }
};
