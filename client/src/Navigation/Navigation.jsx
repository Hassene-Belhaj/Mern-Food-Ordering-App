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
               <Route path='/login'  element={<Login />} />
               <Route path='/register'  element={<Register />} />
               <Route path='/menu'  element={<Menu />} />
               <Route path='/cart'  element={<Cart />} />
               <Route path='/paymentsuccess'  element={<PaymentSuccess />} />
        </Routes>

    </BrowserRouter>
  )
}

export default Navigation