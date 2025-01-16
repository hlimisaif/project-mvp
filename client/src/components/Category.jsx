import React from 'react'

function Category({category,handleCatChange}) {
    // console.log(category,"props");
    
  return (
   <div>
<select onChange={(e)=>handleCatChange(e.target.value)} className="form-select"  >
  <option value ="all">select category</option>
  {category.map((el,i) => (
  <option key ={i} value={el.id}>{el.NameCategory}</option>
))}
</select>
    </div>
  )
}

export default Category
