import React from 'react'

 const CartDivList = ({userCart, cartCount, deleteFromCart}) => {
  return (
    <div id="cart-div-list">
        <ul>
            {userCart.map(u1 => 

               
                
                <div className="cart-div-list-2" key={Math.floor(Math.random() * 50000)}>
                    
                    <h2>{u1.name}</h2>
                    <img src={u1.img} alt="Cart Photo" />
                    <h3>{u1.price}</h3>
                    <h4>{`Quantity: ${u1.quantity}`}</h4>
                    <button className='btn btn-primary' onClick={() => deleteFromCart(u1.id)}>Delete Cart Item</button>
                </div>)}
        </ul>
        
    </div>
  )
}

export default CartDivList
