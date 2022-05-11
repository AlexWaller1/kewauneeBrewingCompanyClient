import React from 'react'
import  AddDessertBtn  from './AddDessertBtn';

 const DessertsDiv = ({ desserts, addToCart3 }) => {
  return (
    <div id="desserts-div">
        <h1>Our Desserts:</h1>
        <ul>
            {desserts.map(d1 => 
                <div id="desserts-div-2" key={d1.id}>
                    <h2>{d1.name}</h2>
                    <img src="" alt="Dessert Image" />
                    <h3>{d1.price}</h3>
                    <button className='btn btn-primary' id="dessert-btn" onClick={() => addToCart3(d1.id)}>Add To Cart +</button>
                    <h3>{`Quantity: ${d1.quantity}`}</h3>
                </div>
                
                )}
        </ul>
    </div>
  )
}

export default DessertsDiv;
