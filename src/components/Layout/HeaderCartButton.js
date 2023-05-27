import { useContext } from "react";
import CartIcon from "../CandyCart/CartIcon";
import classes from './HeaderCartButton.module.css';
// import CartContext from '../../Store/cart-context';
import Cartcontext from "../../CandySotre/cart-context";


const HeaderCartButton = (props) =>{
 
    const canctx = useContext(Cartcontext);

    // const cartctx = useContext(CartContext);

    // const numberofCartItems  = cartctx.items.reduce((curNumber, item)=>{
    //     return curNumber + item.amount;
    // }, 0)

  const numberofcandysincart = canctx.cartcandys.length;

  
    

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberofcandysincart}</span>
        </button>
    )
}

export default HeaderCartButton;