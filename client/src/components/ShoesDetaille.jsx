import React from 'react'
import Shoess from './Shoess'

function ShoesDetaille({shose,handleDelete}) {
    console.log(shose,"hhhhhhhhhhhhhhhhhhhhhhhh")
  return (
    <div>
     <div className='d-flex align-content-between flex-wrap m-2'>
     {shose.map((el) => (
          <Shoess handleDelete={handleDelete} el={el}/>
      ))}
     </div>
    </div>
  )
}

export default ShoesDetaille
