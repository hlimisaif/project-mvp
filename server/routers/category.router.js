const express = require("express");
const Router = express.Router();
const {getAllcategory,addcategory}=require("../controllers/category.controller")

Router.get("/",getAllcategory);
Router.post("/add",addcategory);

module.exports = Router;