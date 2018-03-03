// Sequelize (capital) references the standard library
module.exports = function (sequelize, DataTypes) {
// sequelize (lowercase) references our connection to the DB.

// Creates a "user" model that matches up with DB
var users = sequelize.define("Users", {
    // the user's first name type gets saved as a string
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 200]
        }
    },
    // the user's last name type gets saved as a string
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 200]
        }
    },
    // the email type gets saved as a string)
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 20]
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
}
, {
    timestamps: false
        });
        
        users.associate = function (models) {
            users.belongsTo(models.permissionLevel,{
                foreignKey: {
                    allowNull: false
                }
            });
        }

    users.associate = function (models) {
        users.hasMany(models.recipe)
    }
    return users
};
// Syncs with DB
// Makes the Character Model available for other files (will also create a table)