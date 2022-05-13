import React from 'react'


 const CartCheckoutDiv = ({ userCart}) => {

    let orderTotal = 0;

    let i = 0;

    for (; i < userCart.length; i++) {
        let priceQuant = userCart[i].price * userCart[i].quantity;
        orderTotal = orderTotal + priceQuant;
    }

    console.log(userCart);
  return (
    <div>
        <h1>Order Checkout</h1>
        <h2>Amount Total</h2>
        <h3>{`$${Math.round(orderTotal)}`}</h3>
    </div>
  )
}

export default CartCheckoutDiv;
