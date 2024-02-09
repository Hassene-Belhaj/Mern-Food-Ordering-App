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
import { useSelector } from 'react-redux'
import PageNotFound from '../Components/PageNotFound'
import ProfileSideBar from '../Components/ProfileSideBar'


const Navigation = () => {
   const authentication = useSelector(state=>state.authentication)
   console.log(authentication.isLoggedIn);

  return (
    <>
        <Navbar />
        <Routes>
               <Route path='/'  element={<Home />} />

                {authentication.isLoggedIn ? 
                null 
                :
                <>
               <Route path='/register'  element={<AuthenticationForm type='register' />} />
               <Route path='/login'  element={<AuthenticationForm  type='login'/>} />
                </>
                }
            
                <Route path='/settings' element={<ProfileSideBar/>}>
                    <Route path='edit_profile' element={<h3>edit profile</h3>}/>
                    <Route path='change_password' element={<h3>change password</h3>}/>
                </Route>

               <Route path='/menu'  element={<Menu />} />
               <Route path='/about'  element={<AboutUs />} />
               <Route path='/cart'  element={<Cart />} />
               <Route path='/paymentsuccess'  element={<PaymentSuccess />} />
               <Route path='*'  element={<PageNotFound />} />
        </Routes>
        <Footer />
    </>
  )
}

export default Navigation