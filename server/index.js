const express = require("express");
const App = express();
const cors =require('cors')
const db=require("./models/index")
const port = 5000;
const shoesRoute=require("./routers/shoes.router")
const categoryRoute=require("./routers/category.router")
App.use(cors())
App.use(express.json())
App.use("/api/shoes",shoesRoute) 
App.use("/api/category",categoryRoute)
App.listen(port, () => {
  console.log(`app listening on http://127.0.0.1:${port}`);
});
