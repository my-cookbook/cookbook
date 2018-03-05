// Sequelize (capital) references the standard library
module.exports = function (sequelize, DataTypes) {
// sequelize (lowercase) references our connection to the DB.
// Creates a "permissionLevel" model that matches up with DB
var PermissionLevel = sequelize.define("PermissionLevel", {
    // the permission Type gets saved as a string
    permissionType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 250]
        }
    },
    // the permission Description  (a string)
    permissionDescription: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 250]
        }
    },
}, {
    timestamps: false
});

    PermissionLevel.associate = function (models) {
        PermissionLevel.hasMany(models.User)

    }
    return PermissionLevel
};
// Syncs with DB

// Makes the Character Model available for other files (will also create a table)
