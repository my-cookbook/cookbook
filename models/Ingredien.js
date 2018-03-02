// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "permissionLevel" model that matches up with DB
var ingredient = sequelize.define("ingredian", {
    //unique id for each recepies will save as int 
    quantity: Sequelize.STRING,
    // the permission Type gets saved as a string
    measurement: Sequelize.STRING,
    // the permission Description  (a string)
    recepiesId: Sequelize.INTEGER,
   
}, {
        timestamps: false
    });
// Syncs with DB
ingredient.sync();
// Makes the Character Model available for other files (will also create a table)
module.exports = ingredient;