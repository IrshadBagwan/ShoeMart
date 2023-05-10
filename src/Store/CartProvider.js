import { useState } from "react";
import CartContext from "./cart-context";


const CartProvider = props =>{


    const [items,updateItems] = useState([]);
    const addItemToCartHandler = item =>{
       updateItems([...items,item]);
       console.log(item);
    };

    const remvoeItemFromCartHandler = id =>{

    }

    const cartContext = {
        items:items,
        addItem: addItemToCartHandler ,
        removeItem: remvoeItemFromCartHandler,
        
    }
   return <CartContext.Provider value={cartContext}>
       {props.children}
   </CartContext.Provider>

}

export default CartProvider;