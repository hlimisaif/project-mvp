const { Sequelize, DataTypes } = require("sequelize");
const connection = new Sequelize("shoes", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
const testConnection = async () => {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
testConnection();
db={}
db.connection=connection
db.connection=connection
db.User=require("./user.model")(connection,DataTypes)
db.Shoes=require("./shoes.model")(connection,DataTypes)
db.Category=require("./category.model")(connection,DataTypes)

db.User.hasMany(db.Shoes)
db.Shoes.belongsTo(db.User)
db.Category.hasMany(db.Shoes)
db.Shoes.belongsTo(db.Category)
// connection.sync({force: true})
// .then(()=>console.log("database created"))
// .catch((err)=>console.log(err)
// )
// You can use the .authenticate() function to test if the connection is OK
// finish implementing the database logic
module.exports=db