const express = require("express");
const Router = express.Router();
const {getAllShoess,addShoes,deleteShoes,getOneShoes,updateShoes,getAllShoesscat}=require("../controllers/shoes.controller")

Router.get("/",getAllShoess);
Router.post("/add",addShoes);
Router.get("/:id",getOneShoes);
Router.delete("/:id",deleteShoes);
Router.put("/:id",updateShoes);
Router.get("/category/:id",getAllShoesscat);
module.exports = Router;
