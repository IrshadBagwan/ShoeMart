import React,{ useRef, useContext, useState } from "react";
import classes from './CandyInput.module.css';
import CartContext from "../../CandySotre/cart-context";


const CandyInput = props =>{
   
    const canctx = useContext(CartContext);
    const candyname = useRef();
    const candydesc = useRef();
    const candyprice = useRef();
    const largesize = useRef();
    const mediumsize = useState();
    const smallsize = useRef();

  const AddCandy = (e) =>{
      e.preventDefault();

      const CandyName = candyname.current.value;
      const CandyDesc = candydesc.current.value;
      const CandyPrice = candyprice.current.value;
      const LargeSize = largesize.current.value;
      const SmallSize = smallsize.current.value;
      const MeduimSize = mediumsize.current.value;

     canctx.addItem({
         name: CandyName,
         desc :CandyDesc,
         Price: CandyPrice,
         large: LargeSize,
         meduim: MeduimSize,
         small: SmallSize
     })
    console.log('hello')
    candyname.current.value='';
    candydesc.current.value='';
    candyprice.current.value='';
    largesize.current.value='';
    mediumsize.current.value='';
    smallsize.current.value='';

  }
  
   


    return(
        <form>
       <div className={classes.container}>
           
           <label>Shoes Name</label>
           <input ref={candyname} type="text"></input>
           <label>Description</label>
           <input ref={candydesc} type="text"></input>
           <label>Price</label>
           <input ref={candyprice} type="number"></input>
           <label>L</label>
           <input ref={largesize} className={classes.lms} type="number"></input>
           <label>M</label>
           <input ref={mediumsize} className={classes.lms} type="number"></input>
           <label>S</label>
           <input ref={smallsize} className={classes.lms} type="number"></input>
           <button onClick={AddCandy}>Add</button>
          
       </div>
       </form>
      

    );

}

export default CandyInput;