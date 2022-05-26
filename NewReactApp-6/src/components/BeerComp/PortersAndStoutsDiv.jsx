import React from 'react'

 const PortersAndStoutsDiv = ({ userCart, porters, stouts, addBeerToCart}) => {
  return (
    <div id="porters-stouts-div">
      <div id="porters-div">
        <h1 id="porters-header">Porters:</h1>
        { porters.map(porter => 
        <div key={porter.id} className="ind-porter-div">
         <h2>{porter.name}</h2>
         <h3>{porter.price}</h3>
         <img src={porter.img} alt="beer-img" />
         <br />
         <br />
         <button className='btn btn-primary' onClick={() => addBeerToCart(porter.id, porters)}>Cart +</button>
         <h2>{porter.quantity}</h2>
         <button className='btn btn-primary'>Cart -</button>
         <h3>-------------------</h3>
        </div>
          )}
      </div>
      <div id="stouts-div">
        <h1 id="stouts-header">Stouts:</h1>
        { stouts.map(stout => 
          <div key={stout.id} className="ind-stout-div">
            <h2>{stout.name}</h2>
            <h3>{stout.price}</h3>
            <img src={stout.img} alt="beer-img" />
            <br />
            <br />
            <button className="btn btn-primary" onClick={() => addBeerToCart(stout.id, stouts)}>Cart +</button>
            <h2>{stout.quantity}</h2>
            <button className='btn btn-primary'>Cart -</button>
            <h3>-------------------</h3>

          </div>
          )}
      </div>
    </div>
  )
}

export default PortersAndStoutsDiv;
