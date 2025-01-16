import "./App.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ShoesDetaille from "./components/ShoesDetaille";
import Category from "./components/Category"
import Addshoes from "./components/Addshoes";
import Update from "./components/Update";




function App() {
  const [shose,setShoes]=useState([]);
  const [category,setCategory]=useState([])
  const [view, setView] = useState("main");
const [shoescat,setShoescat]=useState([])
const [currentShoes, setCurrentShoes] = useState(null);
const [query,setQuery]=useState("")

const handleUpdateShoes = async (id, updatedShoes) => {
  console.log("updatedShosesssssssssssss", updatedShoes);
  console.log("iddddddddddddddd", id);
  try {
    const response = await axios.put(
      `http://127.0.0.1:5000/api/shoes/${id}`,
      updatedShoes
    );
    // console.log(response.data);
    fetchshoes();
    changeView("main");
  } catch (error) {
    throw error;
  }
}

  const handleAddshoes =  (element) => {
    console.log("shoes", element);
    
      const response =  axios.post("http://127.0.0.1:5000/api/shoes/add", element)
    .then(()=>{
      console.log(response.data);
      fetchshoes()
      changeView("main")
    }).catch((err)=>console.log(err)
    )
  };



  
  const handleDelete = async (id) => {
    console.log("id", id);
    try {
      const response = await axios.delete(
        `http://127.0.0.1:5000/api/shoes/${id}`
      );
      // console.log(response.data);
      fetchshoes()
    } catch (error) {
      throw error;
    }
  }



  useEffect(()=>{
    axios.get("http://127.0.0.1:5000/api/category")
    .then((response)=> {
      console.log(response.data , 'categoryyyyyyyyyyyyyyyy');
  
  
      setCategory(response.data)
    })
    .catch((error)=> {console.log(error ,"error");
    })
    },[]);


    
const fetchshoes=async (catid="all")=>{
  try {
    const endpoint=catid==="all"
    ?"http://127.0.0.1:5000/api/shoes"
    :`http://127.0.0.1:5000/api/shoes/category/${catid}`
    const response= await axios.get(endpoint)
    console.log(response.data)
    setShoes(response.data)
  }catch (error) {
    throw error;
  }
}
const fetchshoescat= async ()=>{
  try {
    const shoescat=await axios.get("http://127.0.0.1:5000/api/shoes/category")
    setShoescat(shoescat.data)
  } catch (error) {
    console.log(error);
    
  }
}
// const handlefiltercat=async (id)=>{
//   if (id==="all")
// }
 useEffect(()=>{
  fetchshoes()
  fetchshoescat()
 },[])

 const changeView = (v) => {
  // console.log("view", v);
  setView(v)
if(v==="main"){
  fetchshoes()
}
};
const handleCatChange=(catid)=>{
  fetchshoes(catid)
}

const getCurrentshoesAndChnageView = (v, shoes) => {
  setView(v);
  setCurrentShoes(shoes);
}
const hundelSearch=async(e,query)=>{
  e.preventDefault()
  console.log("query",query)
  try {
    const shoes = await axios.get(`http://127.0.0.1:5000/api/shoes/search/${query}`);
    setShoes(shoes.data)
    
  } catch (error) {
    throw error
    
  }

 }

  return (
    <div>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" onClick={() => changeView("main")}>
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a
            className="nav-link active"
            aria-current="page"
            href="#"
            onClick={() => changeView("main")}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
            onClick={() => changeView("addShoes")}
          >
            Add Shoes
          </a>
        </li>
      </ul>
      <form
        className="d-flex ms-auto"
        role="search"
        onSubmit={(e) => {
          hundelSearch(e, query);
        }}
      >
        <input
          onChange={(e) => setQuery(e.target.value)}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>
<div>
<Category  handleCatChange={handleCatChange} category={category}/>
  {view==="main"?(<ShoesDetaille getCurrentshoesAndChnageView={getCurrentshoesAndChnageView} handleDelete ={handleDelete}shose={shose}/>
):view==="addShoes"?( <Addshoes category={category} handleAddshoes={handleAddshoes} fetchshoes={fetchshoes}/>
  ):(<Update handleUpdateShoes={handleUpdateShoes}currentShoes={currentShoes}/>)}
 
{/* </div>

  <div > */}
    
   

    </div>
  </div>
  )
}

export default App;
