
import React, {  useState,useContext } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Shop from './components/Shop'
import Cart from './components/Cart';

import UserContext from './context/UserContext';

function App() {

 

  // const [cart, setCart] = useState([]);


  // const [warning, setWarning] = useState(false)

  // const [show, setShow] = useState(true)


  // const handleClick = (item) => {

  //   let isPresent = false;

  //   cart.forEach((product) => {
  //     if (item.id === product.id) {
  //       isPresent = true;
  //     }
  //   })
  //   if (isPresent) {

  //     setWarning(true);
  //     setTimeout(() => {
  //       setWarning(false)
  //     }, 2000);
  //     return
  //   }

  //   setCart([...cart, item])
  // }

  const { show,  setShow,  warning, setWarning } = useContext(UserContext)
 

  return (
    <>
     
        
        

        {/* <NavBar size={cart.length} setShow={setShow} />
        {
          show ? <Shop handleClick={handleClick} /> : <Cart size={cart.length} cart={cart} setCart={setCart} />
        }


        {
          warning && <div className='warning'>
            Item is already Present in your cart
          </div>
        } */}
        <NavBar />
        {
          show ? <Shop/> : <Cart />
        }
        {
          warning && <div className='warning'>
          Item is already Present in your cart
        </div>
        }
    

    </>
  )
}

export default App
