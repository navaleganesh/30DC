import React from 'react'
import UserContext from './UserContext'
import listData from '../list'
import { useState } from 'react'

const UserContextProvider = ({children}) => {
 const [list, setList] = useState(listData)
 const [cart, setCart] = useState([])
 const [show, setShow] = useState(true)
 const [warning, setWarning] = useState(false)
  return (
    <>
    <UserContext.Provider value = {{list, setList,cart, setCart, show , setShow, warning, setWarning}} >
        {children}
    </UserContext.Provider>
    </>
  )
}

export default UserContextProvider