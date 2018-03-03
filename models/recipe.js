module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Recipe.associate = function(models) {

    Recipe.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Recipe.hasMany(models.Ingredient);
  };

  return Recipe;
};
