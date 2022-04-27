import React from 'react'
import AddAppetizerBtn from './AddAppetizerBtn';

 const AppetizersDiv = ({ appetizers, addToCart }) => {
  return (
    <div>
        <ul id="appetizers-div">
           {appetizers.map(a1 => 
           <div key={a1.id} id="appetizers-div-2">
            <h2 >{a1.name}</h2>
            <img src={a1.img} alt="Food Image" />
            <h3>{a1.price}</h3>
            <AddAppetizerBtn addToCart={addToCart}/>
            </div>
            )}
        </ul>
    </div>
  )
}

export default AppetizersDiv;
