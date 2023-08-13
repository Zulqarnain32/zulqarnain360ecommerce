import React, { useContext } from 'react'
import { Cartcontext } from '../global/CartContext'
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
// import StripeCheckout from "react-stripe-checkout"
const Cart = () => {
  const data = useContext(Cartcontext)
  console.log(data);
  const { shoppingCart,totalPrice,quantity,dispatch } = useContext(Cartcontext)
  return (
    <div className='cart-parent-container'>
       <div className="cart-sub-container">
        {/* ======== cart-sub-container have 2 divs =============== */}
         <div className="cart-container">
            <h3 className='cart-title'>Shoping Cart</h3>
            <h3>{shoppingCart.length > 0 ? 
            shoppingCart.map(cart => (
              <div className="cart-style" key={cart.id}>
                <div className="cart-holder">
                <span ><img src={cart.image} alt="image not  fount" className='cartImage'/></span>
                <span className ='cartProductName'>{cart.name}</span>
                <span className ='cartProductPrice'>${cart.price}.00 </span>
                <span className ='incr' onClick={() => dispatch({type:'INCR', id:cart.id, cart})}> <FaPlus/> </span>
                <span className ='cartProductQuantity'>{cart.quantity}</span>
                <span className ='decr' onClick={() => dispatch({type:'DECR', id:cart.id, cart})}> <FaMinus/> </span>
                <span className ='cartTotalPrice'>${cart.price * cart.quantity}.00</span>
                <span className='delete'  onClick={() => dispatch({type:'DELETE', id:cart.id, cart})}> <FaTrash /> </span>
                </div>

              </div>
            ))
            :<span className='textcenter'>Your cart is currently empty</span>}</h3>
          
         </div>
         
         {shoppingCart.length > 0 ? <div className='cart-summary'>
          <div className='summary'>
            <h3 className='heading'>Cart Summary</h3>
            <hr />
            <div className="total-items">
              <div className="items">Total Items</div>
              <div className="item-count">{quantity}</div>
            </div>
            <div className="total-price-section">
              <div className="just-title">Total Price</div>
              <div className="items-price">${totalPrice}.00</div>
            </div>
            <div className="stripe-section">

             
            </div> 

          </div>
         </div>:""}
       </div>
       
    </div>
  )
}

export default Cart
