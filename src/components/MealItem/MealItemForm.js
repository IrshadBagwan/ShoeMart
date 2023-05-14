import React, { useContext, useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import CartContext from "../../Store/cart-context";

const MealItemForm = (props) => {

  const [amountIsValid,setamountIsValid] = useState(true); 
  const amountInputRef = useRef();

  const ctx = useContext(CartContext);
  console.log(ctx);

  const addItemToCart = (e) => {
    e.preventDefault();

    //Update the cartContex.items

    // const quantity = document.getElementById("amount_" + props.id).value;

    // ctx.addItem({ ...props.item, quantity: quantity, id: props.id });

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    
    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
        setamountIsValid(false);
        return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
      {!amountIsValid && <p>Please Enter a Valid Amount</p>}
    </form>
  );
};

export default MealItemForm;
