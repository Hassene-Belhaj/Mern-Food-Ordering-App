import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import  Cart  from '../Pages/Cart/index'
import  Menu  from '../Pages/Menu/index'
import  Home  from '../Pages/Home/index'
import  Register  from '../Pages/Register/index'
import  Login  from '../Pages/Login/index'
import  PaymentSuccess  from '../Pages/PaymentSuccess/index'

const Navigation = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
               <Route path='/'  element={<Home />} />
               <Route path='/'  element={<Login />} />
               <Route path='/'  element={<Register />} />
               <Route path='/'  element={<Menu />} />
               <Route path='/'  element={<Cart />} />
               <Route path='/'  element={<PaymentSuccess />} />
        </Routes>

    </BrowserRouter>
  )
}

export default Navigation