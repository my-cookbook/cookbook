// Sequelize (capital) references the standard library
module.exports = function (sequelize, DataTypes) {
// sequelize (lowercase) references our connection to the DB.

// Creates a "user" model that matches up with DB
var User = sequelize.define("User", {
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
            len: [1, 100]
        }
    },
    // the passwords type gets saved as a string)
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 50]
        }
    },
},
{
    timestamps: false
    });
        
    User.associate = function (models) {
        User.belongsTo(models.PermissionLevel,{
            foreignKey: {
                allowNull: false
            }
        });
    }

    User.associate = function (models) {
        User.hasMany(models.Recipe)
    }

    return User
};
// Syncs with DB
// Makes the Character Model available for other files (will also create a table)