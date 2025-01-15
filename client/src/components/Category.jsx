import React from 'react'

function Category({category}) {
    // console.log(category,"props");
    
  return (
   <div>
<select onChange={(e)=>console.log(e.target.value)} className="form-select"  >
  <option selected>select category</option>
  {category.map((el,i) => (
  <option key ={i} value={el.id}>{el.NameCategory}</option>
))}
</select>
    </div>
  )
}

export default Category
