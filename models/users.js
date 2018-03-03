// Sequelize (capital) references the standard library
module.exports = function (sequelize, DataTypes) {
// sequelize (lowercase) references our connection to the DB.

// Creates a "user" model that matches up with DB
var users = sequelize.define("users", {
    // the username Type gets saved as a string
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 200]
        }
    },
    // the passwords type gets saved as a string)
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 20]
        }
    },
    //the userID (unique ID)
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1, 200]
        }
    },
    //user level/description (String)
    userLeve: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 200]
        }
    },

}
, {
    timestamps: false
});
    return users
};
// Syncs with DB
// Makes the Character Model available for other files (will also create a table)
