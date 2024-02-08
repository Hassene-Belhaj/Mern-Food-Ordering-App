import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import  Cart  from '../Pages/Cart/index'
import  Menu  from '../Pages/Menu/index'
import  Home  from '../Pages/Home/index'
import  PaymentSuccess  from '../Pages/PaymentSuccess/index'
import AuthenticationForm from '../Components/AuthenticationForm'
import  AboutUs from '../Pages/AboutUs/index'
import Footer from '../Components/Footer'


const Navigation = () => {


  return (
    <>
        <Navbar />
        <Routes>
               <Route path='/'  element={<Home />} />
               <Route path='/register'  element={<AuthenticationForm type='register' />} />
               <Route path='/login'  element={<AuthenticationForm  type='login'/>} />
               <Route path='/menu'  element={<Menu />} />
               <Route path='/about'  element={<AboutUs />} />
               <Route path='/cart'  element={<Cart />} />
               <Route path='/paymentsuccess'  element={<PaymentSuccess />} />
        </Routes>
        <Footer />
    </>
  )
}

export default Navigation