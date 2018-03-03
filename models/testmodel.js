module.exports = function(sequelize, DataTypes) {
	var NewTable = sequelize.define("NewTable", {
	    user: {
	    	type: DataTypes.STRING, 
	    	allowNull: false,
	    	validate: {
	    		len: [1,140]
	    	}
	    },
	   	password: {
	    	type: DataTypes.STRING, 
	    	allowNull: false,
	    }
	  });
	return NewTable;
}
