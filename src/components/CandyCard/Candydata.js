import React, { useContext } from "react";
import classes from './Candydata.module.css';
import Card from "../Card/Card";
import CartContext from "../../CandySotre/cart-context";
import CandyList from "./CandyList";



const Candydata = () =>{

const canctx = useContext(CartContext);
 const candydata = canctx.candys.map((can)=>
   <CandyList
   name={can.name}
   desc={can.desc}
   Price={can.Price}
   large={can.large}
   small={can.small}
   meduim={can.meduim}
   />
 
 )


return(
        <section className={classes.meals}>
        <Card>
          <ul>{candydata}</ul>
            </Card>
      </section>
    );
}

export default Candydata;