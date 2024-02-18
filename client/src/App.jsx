import React, { useEffect, useState } from 'react'
import { Div, Global_Style } from './Global/Global'
import Navigation from './Navigation/Navigation'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from './utils/Spinner'
import { fetchProfile } from './Redux/Authentication.js/AuthSlice'
import {useLocation } from 'react-router'
import toast, { Toaster } from 'react-hot-toast';





const App = () => {

  axios.defaults.baseURL = import.meta.env.VITE_REACT_BASEURL ;

  axios.defaults.withCredentials = true ;
   
  const location = useLocation()

  useEffect(()=>{
    toast.dismiss()
  },[location])

    return ( 
    <>
      <Global_Style />
      <Toaster
            position='top-right'
            containerStyle={{
              top : '80px',
              right:'0',
            }}
            toastOptions={{
              style : {
                display : 'flex',
                justifyContent:'center',
                alignItems:'center',
                // flexDirection :'column',
                gap : '.5rem',
                fontSize : '.7rem',
                fontWeight:'700',
                padding : '1rem',
                borderRadius: '10px'
              },
            success : {
                duration : 1000 ,
                iconTheme: {
                primary: '#14b8a6',
                },
            },
            error : {
                duration : 1500 ,
                iconTheme: {
                primary: '#e11d48',          
    },
    }
    }}
/>
      <Navigation />
    </>
    )
  }


export default App