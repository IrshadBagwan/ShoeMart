import { useState,useReducer } from "react";
import Cartcontext from "./cart-context";


const CartProvider = props =>{
 
 
  

    const [candys,updateItems] = useState([]);

    const [cartcandys,updatecartcandys] = useState([]);

    const [totalamount,updatetotalamount] = useState(0);
   
  
    
    
   
    const addItemToCartHandler = candy =>{

       
      console.log(candy)
       updateItems([...candys,candy]);
       console.log('these are candys',candys)
   
     
      
    
    };

    const addCandyToCartHandler = candy =>{
        updatecartcandys([...cartcandys,candy])
        console.log(cartcandys.length)
        console.log('so candy in cart',candy.amount)
        updatetotalamount(totalamount+candy.price*candy.amount);

      
        
        
    }

    const remvoeItemFromCartHandler = id =>{
    //    diapatchCartAction({type:'REMOVE', id: id})
    }

    const cartContext = {
        // items:cartState.items,
        // totalAmount:cartState.totalAmount,
        cartcandys:cartcandys,
        candys:candys,
        addItem: addItemToCartHandler ,
        removeItem: remvoeItemFromCartHandler,
        addcandytocart: addCandyToCartHandler,
        totalamount:totalamount
        
       
        
    }
   return (<Cartcontext.Provider value={cartContext}>
       {props.children}
   </Cartcontext.Provider>
   )
}

export default CartProvider;