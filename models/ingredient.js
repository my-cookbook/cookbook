module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define("Ingredient", {
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

  Ingredient.associate = function(models) {
    Ingredient.belongsTo(models.Recipe, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Ingredient;
};
