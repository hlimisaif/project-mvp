import React, { useState } from 'react'

function Addshoes({handleAddshoes,category}) {
    const[Name,setName]=useState("")
    const[ImageUrl,setImageUrl]=useState("")
    const[price,setPrice]=useState(0)
    const[description,setDescription]=useState("")
    const[CategoryId,setCategoryId]=useState("")


  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          className="form-control form-control-lg"
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="Name"
          placeholder="Name"
          aria-label=".form-control-lg example"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
        ImageUrl
        </label>
        <input
          className="form-control form-control-lg"
          onChange={(e) => setImageUrl(e.target.value)}
          type="text"
          name="ImageUrl"
          placeholder="ImageUrl"
          aria-label=".form-control-lg example"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
        price
        </label>
        <input
          className="form-control form-control-lg"
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          name="price"
          placeholder="price"
          aria-label=".form-control-lg example"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
        description
        </label>
        <input
          className="form-control form-control-lg"
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          placeholder="description"
          aria-label=".form-control-lg example"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
        CategoryId
        </label>
        <select onChange={(e)=>setCategoryId(e.target.value)} className="form-select"  >
  <option value ="all">select category</option>
  {category.map((el,i) => (
  <option key ={i} value={el.id}>{el.NameCategory}</option>
))}
</select>
      </div>
      <button
            onClick={() => handleAddshoes({ Name,ImageUrl,price, description,CategoryId })}
            type="button"
            className="btn btn-primary"
          >
            ADD SHOES
          </button>
    </div>
  )
}

export default Addshoes
