import React, { useEffect, useState } from 'react'
import { Div, Global_Style } from './Global/Global'
import Navigation from './Navigation/Navigation'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from './utils/Spinner'
import { fetchProfile } from './Redux/Authentication.js/AuthSlice'
import {useLocation } from 'react-router'





const App = () => {

  axios.defaults.baseURL = import.meta.env.VITE_REACT_BASEURL ;

  axios.defaults.withCredentials = true ;



    return ( 
    <>
      <Global_Style />
      <Navigation />
    </>
    )
  }


export default App