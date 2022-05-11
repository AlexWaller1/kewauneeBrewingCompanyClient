import React from 'react'

 const CartDivList = ({userCart, cartCount, deleteFromCart}) => {

  
  return (
    <div id="cart-div-list">
        <ul className="list-group">
          
            {userCart.map(u1 => 

               
               
                <div className="cart-div-list-2" key={Math.floor(Math.random() * 50000)}>
                  
                    <h2>{u1.name}</h2> 
                    <img src={u1.img} alt="Cart Photo" />
                    <h3>{`$${Math.round(u1.price * u1.quantity)}`}</h3>
                    <h4>{`Quantity: ${u1.quantity}`}</h4>
                    <div className="delete-cart-btn-div">
                    <button className='btn btn-primary' onClick={() => deleteFromCart(u1.id)}>Delete Cart Item</button>
                    </div>
                </div>
               )}
                
        </ul>

       
        
    </div>
  )
}

export default CartDivList
