import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";


 const CartCheckoutDiv = ({ userCart, resetState}) => {

    const [clicked, setClicked] = useState(false);

    const [clicked3, setClicked3] = useState(false);

    const [cardIntput, setCardInput] = useState("");

    let orderTotal = 0;

    let i = 0;

    for (; i < userCart.length; i++) {
        let priceQuant = userCart[i].price * userCart[i].quantity;
        orderTotal = orderTotal + priceQuant;
    }

    console.log(userCart);
    //---------------------------------------------
    //--------------------------------------
    

    function changeClick() {
        let clicked2 = clicked;
        clicked2 = !clicked2;
        setClicked(clicked2);
    }

    function changeClick2() {

       let clicked4 = clicked3;
       clicked4 = !clicked4
       setClicked3(clicked4);
      }

    let returnHome = () => {
      setClicked(false);
      setClicked3(false);
      
    }
  return (
    <div>
        <h1>Order Checkout</h1>
        <h2>Amount Total</h2>
        <h3>{`$${Math.round(orderTotal)}`}</h3>
        <button className="btn btn-primary" onClick={() => changeClick()}>Pay For Order</button>
        <br />
        <br />
        {clicked  && !clicked3 ? <form>
            <input type="text" placeholder='card number...' value={cardIntput} onChange={e => setCardInput(e.target.value)}/>
            <br />
            <br />
            <input type="submit"  text="Place Order" className="btn btn-primary" onClick={() => changeClick2()}/>
        </form> : <div></div>}
        {clicked && clicked3 ? <div>
          <h1>{`Thank You For Your Order!`}</h1>
          <h2>{`Your Total Is $${parseInt(orderTotal)}`}</h2>
          <h3>{"Your Order Will Be Ready In 45 To 55 Minutes"}</h3>
          <Link to="/" className='btn btn-primary' onClick={() => resetState()}> Return To Home Page</Link>
        </div> : <></>}
    </div>
  )
}

export default CartCheckoutDiv;
