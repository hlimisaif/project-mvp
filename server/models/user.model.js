module.exports = (connection, DataTypes) => {
    const User = connection.define(
      "User",
      
        {
          // Model attributes are defined here
          email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          password:{
            type:DataTypes.STRING,
            allowNull:false
          }
         
        // Other model options go here
      }
    );
    return User;
  };
  