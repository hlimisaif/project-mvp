module.exports = (connection, DataTypes) => {
    const Category = connection.define(
      "Category",
      
        {
          // Model attributes are defined here
          NameCategory: {
            type: DataTypes.STRING,
            allowNull: false,
          },
         
        // Other model options go here
      }
    );
    return Category;
  };
  