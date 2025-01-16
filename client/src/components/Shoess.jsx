import React from 'react'

function Shoess({el,handleDelete,getCurrentshoesAndChnageView}) {
    // console.log(el)
  return (
   
    <div className="card m-2"  style={{width: "17rem"}}>
    <img src={el.ImageUrl}className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{el.Name}</h5>
      <p className="card-text">{el.price}</p>
      <p className="card-text">{el.description}</p>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      <a onClick={() => handleDelete(el.id)} className="btn btn-danger">
          delete{" "}
        </a>
        <a onClick={() => getCurrentshoesAndChnageView("update",el)} className="btn btn-success">
          Update{" "}
        </a>
    </div>
  </div>
 
  )
}

export default Shoess
