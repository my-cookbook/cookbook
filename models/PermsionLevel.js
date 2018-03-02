// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "permissionLevel" model that matches up with DB
var permissionLevel = sequelize.define("permissionLevel", {
    // the permission Type gets saved as a string
    permisionType: Sequelize.STRING,
    // the permission Description  (a string)
    permissionDescription: Sequelize.STRING,
    
}, {
        timestamps: false
    });
// Syncs with DB
permissionLevel.sync();
// Makes the Character Model available for other files (will also create a table)
module.exports = permissionLevel;