import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/navbar.css'
import { useState } from 'react'

const NavBar = () => {
  const { cart, setCart, show,  setShow } = useContext(UserContext)
  
  const handleShow = (e) => {
    setShow(e)
     
  }
  return (
    <nav>
      
        <div className="nav_box">
            <span onClick={()=>handleShow(true)}>DxO shop</span>
            
            <div className="cart" onClick={()=> handleShow(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{cart.length}</span>
            </div>
        </div>
    </nav>
  )
}

export default NavBar