const {Shoes}=require("../models/index")
const { search } = require("../routers/shoes.router")
const {Op}=require ("sequelize")
module.exports = {
  getAllShoess: async (req, res) => {
    try{
      const Shoess= await Shoes.findAll()
      res.send(Shoess)
    }catch(error){
      res.status(500).send(error)
    }
    
    
  },

  getAllShoesscat: async (req, res) => {
    const cat = req.params.id
    try{
      const Shoess= await Shoes.findAll({ where: {CategoryId: cat } })
      res.send(Shoess)
    }catch(error){
      res.status(500).send(error)
    }
    
    
  },

  addShoes: async (req, res) => {
    const {Name,ImageUrl,price,describtion,CategoryId}=req.body
   try{
    
    const newShoess= await Shoes.create({Name,ImageUrl,price,describtion,CategoryId})
    res.status(201).send({
      success: "Shoes is created succefully",
      Shoes: newShoess,
    });
    
   }catch (error) {
    throw error;
  }
  },
  getOneShoes:async (req,res)=>{
    const {id}=req.params
    try{
      const Shoess=await Shoes.findOne({
        where:{id}
      })
      res.send(Shoess)
    }catch(error){
      res.status(500).send(error)
    }
  },
  updateShoes: async(req,res)=>{
    const {id}=req.params
    const {Name,ImageUrl,price,description,CategoryId}=req.body
    if(!id){
      res.status(404).send({message:"id is not found"})
    }
    const Shoess = await Shoes.findOne({ id });
    if (!Shoes) {
      return res.status(401).send({ message: "Shoes not found" });
    }const updateShoes = await Shoes.update(
      {
        Name: Name || Shoes.Name,
        ImageUrl: ImageUrl || Shoes.ImageUrl,
        price:price||Shoes.price,
        description: description || Shoes.description,
        CategoryId:CategoryId||Shoes.CategoryId
        
       
      },
      {
        where: {
          id,
        },
      }
    );
    res.send({ message: "Shoes is updated succefully", updateShoes });
  },
  deleteShoes:async(req,res)=>{
    const {id}=req.params
    try{
      if(!id){
        res.status(401).send({message:"id is not found"})
      }
      const Shoess = await Shoes.findOne({ id });
      if (!Shoess) {
        return res.status(401).send({ message: "Shoes not found" });
      }
      await Shoes.destroy({
        where:{
          id:id
        }
      })
      return res.send({ message: "Shoes is deleted succefully" });

    }
    catch (error) {
      // throw error;
      res.status(500).send(error);
    }
  },
  
  searchShoes: (req, res) => {
    const { query } = req.params; 
    if (!query) {
      return res.status(400).json({ message: 'Query parameter is required.' });
    }
    
    Shoes.findAll({
      where: {
        Name: {
          [Op.like]: `${query}%`, 
        },
      },
    })
      .then((shoes) => { 
        if (shoes.length === 0) {
          return res.status(404).json({ message: 'No Shoes found' });
        }
  
        res.status(200).json(shoes);
      })
      .catch((error) => {
        res.status(500).json({ message: 'Error searching for Shoes', error });
      });
  },

  }
  