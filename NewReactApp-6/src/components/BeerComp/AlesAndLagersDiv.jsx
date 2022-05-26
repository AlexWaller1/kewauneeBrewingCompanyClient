import React from 'react'

 const AlesAndLagersDiv = ({userCart, ales, lagers, addBeerToCart}) => {
  return (
    <div id="ales-lagers-div">
      
      <div id="ales-div">
        <h1>Ales:</h1>
        {ales.map(ale => 
          <div key={ale.id} className="ind-ale-div">
            <h2>{ale.name}</h2>
            <h3>{ale.price}</h3>
            <img src={ale.img} alt="beer-img" />
            <br />
            <br />
            <button className='btn btn-primary' onClick={() => addBeerToCart(ale.id, ales)}>Cart +</button>
            <h3>{ale.quantity}</h3>
            <button className='btn btn-primary'>Cart -</button>
            <h3>-------------------</h3>
          </div>
          )}
      </div>
      <div id="lagers-div">
        <h1>Lagers:</h1>
        {
          lagers.map(lager => 
            <div key={lager.id} className="ind-lagers-div">
              <h2>{lager.name}</h2>
              <h3>{lager.price}</h3>
              <img src={lager.img} alt="beer-img" />
              <br />
              <br />
              <button className='btn btn-primary' onClick={() => addBeerToCart(lager.id, lagers)}>Cart +</button>
              <h3>{lager.quantity}</h3>
              <button className="btn btn-primary">Cart -</button>
              <h3>-------------------</h3>
            </div>
            )
        }
      </div>

    </div>
  )
}

export default AlesAndLagersDiv;
