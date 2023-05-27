import React,{ Fragment } from 'react';
// import MealImage from '../../components/assets/MealImage.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = props =>{
   
     return <Fragment>
         <header className={classes.header}>
             <h1>My Shoe Mart</h1>
             <HeaderCartButton onClick={props.onShowCart} />
            
         </header>
         
     </Fragment>
};

export default Header;