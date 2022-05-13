import React from 'react'
import { Link } from "react-router-dom";


 const CartCheckoutDiv = ({ userCart}) => {

    let orderTotal = 0;

    let i = 0;

    for (; i < userCart.length; i++) {
        let priceQuant = userCart[i].price * userCart[i].quantity;
        orderTotal = orderTotal + priceQuant;
    }

    console.log(userCart);
    //---------------------------------------------
    //--------------------------------------
    let clicked = false;

    function changeClick() {
        clicked = !clicked;
        console.log("react")
    }
  return (
    <div>
        <h1>Order Checkout</h1>
        <h2>Amount Total</h2>
        <h3>{`$${Math.round(orderTotal)}`}</h3>
        <button className="btn btn-primary" onClick={() => changeClick()}>Pay For Order</button>
        {clicked ? <form>
            <input type="text" placeholder='card number...'/>
            <input type="submit"  text="Place Order"/>
        </form> : <div></div>}
    </div>
  )
}

export default CartCheckoutDiv;
