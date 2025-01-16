import React,{useState} from 'react'

function Update({handleUpdateShoes,currentShoes}) {
 const[Name,setName]=useState(currentShoes.Name)
 const[ImageUrl,setImageUrl]=useState(currentShoes.ImageUrl)
 const[price,setPrice]=useState(currentShoes.price)
 const[description,setDescription]=useState(currentShoes.description)
 const[CategoryId,setCategoryId]=useState(currentShoes.CategoryId)


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
          value={Name}
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
          value={ImageUrl}
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
          value={price}
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
          value={description}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
        CategoryId
        </label>
        <input
          className="form-control form-control-lg"
          onChange={(e) => setCategoryId(e.target.value)}
          type="text"
          name="CategoryId"
          placeholder="CategoryId"
          aria-label=".form-control-lg example"
          value={CategoryId}
        />
      </div>
      <button
            onClick={() => handleUpdateShoes(currentShoes.id,{ Name,ImageUrl,price, description,CategoryId })}
            type="button"
            className="btn btn-primary"
          >
            update
          </button>
    </div>
  )
}



export default Update
