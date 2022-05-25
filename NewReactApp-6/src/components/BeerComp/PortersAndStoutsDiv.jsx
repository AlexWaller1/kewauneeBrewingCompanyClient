import React from 'react'

 const PortersAndStoutsDiv = ({ userCart, porters, stouts}) => {
  return (
    <div id="porters-stouts-div">
      <div id="porters-div">
        <h1 id="porters-header">Porters</h1>
        { porters.map(porter => 
        <div key={Math.random() * 10000} className="ind-porter-div">
         <h2>{porter.name}</h2>
         <h2>{porter.price}</h2>
         <img src={porter.img} alt="beer-img" />
         <br />
         <br />
         <button className='btn btn-primary'>Cart +</button>
         <h2>{porter.quantity}</h2>
         <button className='btn btn-primary'>Cart -</button>
        </div>
          )}
      </div>
      <div id="stouts-div"></div>
    </div>
  )
}

export default PortersAndStoutsDiv;
