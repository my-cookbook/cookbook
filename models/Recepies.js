// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "permissionLevel" model that matches up with DB
var recepies = sequelize.define("recepies", {
    //unique id for each recepies will save as int 
    recepiesId:Sequelize.INTEGER,
    // the permission Type gets saved as a string
    recepiesTitle: Sequelize.STRING,
    // the permission Description  (a string)
    recepiesNote: Sequelize.STRING,
    //
    recepiesSteps:Sequelize.STRING,

}, {
        timestamps: false
    });
// Syncs with DB
recepies.sync();
// Makes the Character Model available for other files (will also create a table)
module.exports = recepies;