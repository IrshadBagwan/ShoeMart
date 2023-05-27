import React,{useState} from 'react';
import Candydata from './Components/CandyCard/Candydata';
import CandyInput from './Components/CandyInput/CandyInput';
import CartProvider from './CandySotre/CartProvider';
import CandysonScreen from './Components/CandyCard/Candysonscreen';
import CandyList from './Components/CandyCard/CandyList';
import Header from './Components/Layout/Header';
import Cart from './Components/CandyCart/Cart';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }

  const hideCartHandler = () =>{
    setCartIsShown(false);
  }
 

  return (
    <>
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
     
   <CandyInput />
   {/* <Candydata /> */}


   <main>
   <CandysonScreen />
   </main>
   
   {/* <CandyList /> */}
   </CartProvider>

   </>
  );
}

export default App;
