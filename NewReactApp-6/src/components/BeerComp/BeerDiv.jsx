import React from 'react'
import AlesAndLagersDiv from './AlesAndLagersDiv';
import PortersAndStoutsDiv from './PortersAndStoutsDiv';

const BeerDiv = ({userCart, ales, lagers, porters, stouts, addBeerToCart, takeBeerFromCart}) => {
  return (
    <div>
        <h1>Our Beer Menu</h1>
        <AlesAndLagersDiv userCart={userCart} ales={ales} lagers={lagers} addBeerToCart={addBeerToCart} takeBeerFromCart={takeBeerFromCart}/>
        <PortersAndStoutsDiv userCart={userCart} porters={porters} stouts={stouts} addBeerToCart={addBeerToCart} takeBeerFromCart={takeBeerFromCart}/>
    </div>
  )
}

export default BeerDiv;
