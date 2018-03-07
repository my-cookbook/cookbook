// Sequelize (capital) references the standard library
module.exports = function (sequelize, DataTypes) {
// sequelize (lowercase) references our connection to the DB.

// Creates a "permissionLevel" model that matches up with DB
var Recipe = sequelize.define("Recipe", {
    //unique id for each recipe will save as int 
    // the permission Type gets saved as a string
    recipeTitle: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 200]
        }
    },
    // the permission Description  (a string)
    recipeDescription: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 200]
        }
    },
    //clumn in recipe Procedure 
    recipeProcedure: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 2000]
        }
    },
    //clumn for notes 
    recipeNotes:{
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 2000]
        }  
    }

}, {
    timestamps: false
});

    Recipe.associate = function (models) {
        Recipe.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    Recipe.associate = function (models) {
        Recipe.hasMany(models.Ingredient)
    }
    return Recipe
};
// Syncs with DB

// Makes the Character Model available for other files (will also create a table)
