import React from 'react'

 const AddAppetizerBtn = ({ addToCart }) => {
  return (
    <button className='btn btn-primary' onClick={addToCart}>Add To Cart</button>
  )
}

export default AddAppetizerBtn
