// Sequelize (capital) references the standard library
module.exports = function (sequelize, DataTypes) {
// sequelize (lowercase) references our connection to the DB.

// Creates a "permissionLevel" model that matches up with DB
var recepies = sequelize.define("recepies", {
    //unique id for each recepies will save as int 
    recepiesId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 20]
        }
    },
    // the permission Type gets saved as a string
    recepiesTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 200]
        }
    },
    // the permission Description  (a string)
    recepiesNote: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 200]
        }
    },
    //
    recepiesSteps: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 200]
        }
    },

}, {
    timestamps: false
});
    return recepies
};
// Syncs with DB

// Makes the Character Model available for other files (will also create a table)
