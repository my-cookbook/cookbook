// Sequelize (capital) references the standard library
module.exports = function (sequelize, DataTypes) {
// sequelize (lowercase) references our connection to the DB.
// Creates a "permissionLevel" model that matches up with DB
var ingredient = sequelize.define("ingredient", {
    //unique id for each recepies will save as int 
    quantity: {
        type: DataTypes.STRING,
        AllowNull: true,
        Validate: {
            len: [0, 200]
        }
    },
    // the permission Type gets saved as a string
    measurement: {
        type: DataTypes.STRING,
        AllowNull: true,
        Validate: {
            len: [0, 200]
        }
    },
    // the permission Description  (a string)
}, {
    timestamps: false
});
    ingredient.associate = function (models) {
        ingredient.belongsTo(models.recepies, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return ingredient
};
// Syncs with DB
// Makes the Character Model available for other files (will also create a table)
