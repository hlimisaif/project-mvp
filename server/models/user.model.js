module.exports = (connection, DataTypes) => {
    const user = connection.define(
      "user",
      
        {
          // Model attributes are defined here
          Name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          LastName:{
            type:DataTypes.STRING,
            allowNull:false
          }
         
        // Other model options go here
      }
    );
    return user;
  };
  