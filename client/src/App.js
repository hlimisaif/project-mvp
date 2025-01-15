import "./App.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ShoesDetaille from "./components/ShoesDetaille";
import Category from "./components/Category"
import Addshoes from "./components/Addshoes";




function App() {
  const [shose,setShoes]=useState([]);
  const [category,setCategory]=useState([])
  const [view, setView] = useState("main");



  const handleAddshoes =  (shoes) => {
    console.log("shoes", shoes);
    
      const response =  axios.post("http://127.0.0.1:5000/api/shoes/add", shoes)
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

const fetchshoes=async ()=>{
  try {
    const response= await axios.get("http://127.0.0.1:5000/api/shoes")
    console.log(response.data)
    setShoes(response.data)
  }catch (error) {
    throw error;
  }
}
 useEffect(()=>{
  fetchshoes()
 },[])
 const changeView = (v) => {
  console.log("view", v);
  setView(v);
};




  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"onClick={()=>changeView("main")}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"onClick={()=>changeView("main")}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"onClick={() => changeView("addShoes")}>ADD SHOES</a>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
              <input
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
<Category  category={category}/>
  {view==="main"?(<ShoesDetaille handleDelete ={handleDelete}shose={shose}/>
):view==="addShoes"?( <Addshoes handleAddshoes={handleAddshoes} fetchshoes={fetchshoes}/>
  ):view==="main"}
 
{/* </div>

  <div > */}
    
   

    </div>
  </div>
  )
}

export default App;
