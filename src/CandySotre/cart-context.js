import React from 'react';

const Cartcontext = React.createContext({
    candys: [],
    cartcandys:[],
    addItem: (item)=>{},
    removeItem: (id)=>{},
    addcandytocart: (candy)=>{},
    toatalamount:0
    
   
  
});

export default Cartcontext;