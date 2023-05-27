import React, { useContext } from "react";
import classes from "./Cart.module.css";
// import Modal from "../UI/Modal";
// import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";
import Cartcontext from "../../CandySotre/cart-context";
import Modal from "../Modal/Modal";

const Cart = (props) => {
  const cartcntx = useContext(Cartcontext);
// {console.log('So amount is',cartcntx.totalAmount)}
//   const hasItem = cartcntx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartcntx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    console.log('The item is here',item)
    cartcntx.addItem({...item, amount:1})
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntx.cartcandys.map((item) => (
        <CartItem
        //   key={item.name}
          name={item.name}
          desc={item.desc}
          amount={item.amount}
          price={item.Price}
          large={item.large}
          small={item.small}
          medium={item.medium}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
    
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount{cartcntx.str}</span>
        <span>{cartcntx.toatalamount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
     <button className={classes.button}>Order</button>
      </div>
     
    </Modal>
  );
};

export default Cart;
