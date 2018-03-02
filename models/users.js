// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "user" model that matches up with DB
var users = sequelize.define("users", {
    // the username Type gets saved as a string
    userName: Sequelize.STRING,
    // the passwords type gets saved as a string)
    password: Sequelize.INTEGER,
    //the userID (unique ID)
    UserID: Sequelize.INTEGER,
    //user level/description (String)
    userLevel: Sequelize.STRING
    
}, {
        timestamps: false
    });
// Syncs with DB
users.sync();
// Makes the Character Model available for other files (will also create a table)
module.exports = users;