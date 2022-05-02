import React from 'react'
import CartDivList from './CartDivList'

 const CartPage = ({userCart, cartCount, deleteFromCart}) => {
  return (
    <div id="cart-page-div">
        <h1>Customer Checkout:</h1>
        <br />
        <CartDivList userCart={userCart} cartCount={cartCount} deleteFromCart={deleteFromCart}/>
    </div>
  )
}

export default CartPage
