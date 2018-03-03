module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
  	last_name: {
  		type: DataTypes.STRING,
  		allowNull: false
  	},
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return User;
};

// User.associate = funtion(models) {
//   User_Type.hasMany(models.User, {
//     foreignKey: {
//       allowNull: false
//     }
//   });
// };



