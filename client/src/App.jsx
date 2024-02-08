import React, { useEffect, useState } from 'react'
import { Div, Global_Style } from './Global/Global'
import Navigation from './Navigation/Navigation'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile } from './Redux/Authentication.js/Authslice'
import Spinner from './utils/Spinner'





const App = () => {

  axios.defaults.baseURL = import.meta.env.VITE_REACT_BASEURL ;

  axios.defaults.withCredentials = true ;
  
  const authentication = useSelector(state=>state.authentication)
  const dispatch = useDispatch()
  console.log(authentication);

  useEffect(()=>{
    dispatch(fetchProfile())
  },[])


    return ( 
    <>
      <Global_Style />
      <Navigation />
    </>
    )
  }


export default App