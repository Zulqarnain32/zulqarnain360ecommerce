
export const CartReducer = (state, action) => {
   const { shoppingCart, totalPrice, quantity } = state;
   let myproduct;
   let updatedPrice;
   let updatedQuantity;
   switch (action.type) {
     case 'ADD_TO_CART':
       console.log('this is working');
       const check = shoppingCart.find((product) => product.id === action.product.id);
 
       if (check) {
         console.log('this item is already included');
         return state;
       } 
     
      else {
        myproduct = action.product;
        myproduct["quantity"] = 1;
        updatedQuantity = quantity + 1;
        updatedPrice = totalPrice + myproduct.price;
        return { shoppingCart: [myproduct, ...shoppingCart],totalPrice:updatedPrice,quantity:updatedQuantity}
     }
     case "INCR":
      console.log("increase");
      myproduct = action.cart;
      myproduct.quantity = myproduct.quantity + 1;
      updatedPrice = totalPrice + myproduct.price;
      updatedQuantity = quantity + 1;
       return {shoppingCart: [...shoppingCart],totalPrice:updatedPrice,quantity:updatedQuantity}
      break;
     break;
     case "DECR":
      myproduct = action.cart;
  if(myproduct.quantity > 1){
      console.log("dddddddecrease");
      updatedPrice = totalPrice - myproduct.price;
      myproduct.quantity = myproduct.quantity - 1;
      updatedQuantity = quantity - 1;
  
   return {shoppingCart: [...shoppingCart],totalPrice:updatedPrice,quantity:updatedQuantity}
  }
  else {
   return state
  }
  break;
  case "DELETE":
    const filtered = shoppingCart.filter(product => product.id !== action.id) 
    myproduct = action.cart;
    updatedQuantity = quantity - myproduct.quantity;
    updatedPrice = totalPrice - myproduct.price * myproduct.quantity
    return {shoppingCart:[...filtered],totalPrice:updatedPrice,quantity:updatedQuantity}

     default:
       return state;
   }
 };
 