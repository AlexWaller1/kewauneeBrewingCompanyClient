import React from 'react'
import AlesAndLagersDiv from './AlesAndLagersDiv';
import PortersAndStoutsDiv from './PortersAndStoutsDiv';

const BeerDiv = ({userCart, ales, lagers, porters, stouts, addBeerToCart}) => {
  return (
    <div>
        <h1>Our Beer Menu</h1>
        <AlesAndLagersDiv userCart={userCart} ales={ales} lagers={lagers} addBeerToCart={addBeerToCart}/>
        <PortersAndStoutsDiv userCart={userCart} porters={porters} stouts={stouts} addBeerToCart={addBeerToCart}/>
    </div>
  )
}

export default BeerDiv;
