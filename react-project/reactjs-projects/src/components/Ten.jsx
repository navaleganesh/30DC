import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router'
import Home from '../forRoute/Home'
import About from '../forRoute/About'
import Contact from '../forRoute/Contact'
function Ten() {
  return (
     <BrowserRouter>
     <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
     </nav>
         <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
         </Routes>
     </BrowserRouter>
  )
}

export default Ten