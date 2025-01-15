module.exports = (connection, DataTypes) => {
  const Shoes = connection.define(
    "Shoes",
    
      {
        // Model attributes are defined here
        Name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        ImageUrl:{
          type:DataTypes.STRING,
          allowNull:false
        },
        price:{
          type:DataTypes.INTEGER,
          allowNull:false
        },
        description:{
          type:DataTypes.STRING,
          
        },
       
       
      // Other model options go here
    }
  );
  return Shoes;
};
