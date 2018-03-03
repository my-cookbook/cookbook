// Sequelize (capital) references the standard library
module.exports = function (sequelize, DataTypes) {
// sequelize (lowercase) references our connection to the DB.

// Creates a "permissionLevel" model that matches up with DB
var recipe = sequelize.define("recipe", {
    //unique id for each recipe will save as int 
    // the permission Type gets saved as a string
    recipeTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 200]
        }
    },
    // the permission Description  (a string)
    recipeNote: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 200]
        }
    },
    //
    recipeSteps: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 200]
        }
    },

}, {
    timestamps: false
});

    recipe.associate = function (models) {
        users.belongsTo(models.users, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    recipe.associate = function (models) {
        recipe.hasMany(models.ingredient)
    }
    return recipe
};
// Syncs with DB

// Makes the Character Model available for other files (will also create a table)
