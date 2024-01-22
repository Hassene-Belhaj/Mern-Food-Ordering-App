import React from 'react'
import { Global_Style } from './Global/Global'
import Navigation from './Navigation/Navigation'
import axios from 'axios'


const App = () => {

  axios.defaults.baseURL = 'http://127.0.0.1:5000/api'
  // axios.defaults.withCredentials = true

  return (
    <>
     <Global_Style />
      <Navigation />
    </>
    )
}

export default App