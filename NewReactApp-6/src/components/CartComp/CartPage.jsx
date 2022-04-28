import React from 'react'
import CartDivList from './CartDivList'

 const CartPage = ({userCart, cartCount}) => {
  return (
    <div id="cart-page-div">
        <h1>Customer Checkout:</h1>
        <br />
        <CartDivList userCart={userCart} cartCount={cartCount}/>
    </div>
  )
}

export default CartPage
