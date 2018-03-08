// Sequelize (capital) references the standard library
module.exports = function (sequelize, DataTypes) {
// sequelize (lowercase) references our connection to the DB.
// Creates a "permissionLevel" model that matches up with DB
var Ingredient = sequelize.define("Ingredient", {
    //unique id for each recepies will save as int 
    quantity: {
        type: DataTypes.STRING,
        AllowNull: true,
        Validate: {
            len: [0, 2000]
        }
    },
    // the permission Type gets saved as a string
    measurement: {
        type: DataTypes.STRING,
        AllowNull: true,
        Validate: {
            len: [0, 2000]
        }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,

    }
    // the permission Description  (a string)
}, {
    timestamps: false
});
    Ingredient.associate = function (models) {
        Ingredient.belongsTo(models.Recipe, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Ingredient
};
// Syncs with DB
// Makes the Character Model available for other files (will also create a table)