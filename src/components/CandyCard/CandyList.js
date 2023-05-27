
import React,{useContext} from 'react';
import classes from './CandyList.module.css';
import Cartcontext from '../../CandySotre/cart-context';


const CandyList = (props) => {
 
  const canctx = useContext(Cartcontext);

 let lar = props.large;
 
  const btn1handler = () =>{
  
      console.log(lar)
      canctx.addcandytocart({...props,amount:1});
   
    
     
  }
  

  const btn2handler = ()=>{
   
     canctx.addcandytocart({...props,amount:1});
    
   
   
 
    

}

  const btn3handler = ()=>{
    canctx.addcandytocart({...props,amount:1});
  
  }

  return (
    <li className={classes.meal}>
      <div>
        
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{props.Price}</div>

        
       </div>
      <div className={classes.btncont}>
        <button onClick={btn1handler}>BUY Large({lar})</button>
        <button onClick={btn2handler}>BUY Meduim({props.meduim})</button>
        <button onClick={btn3handler}>BUY SMALL({props.small})</button>
      </div>
    </li>
  );
};

export default CandyList;
