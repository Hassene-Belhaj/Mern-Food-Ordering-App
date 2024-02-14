import React from 'react'
import Banner from '../../Components/Banner'
import About from '../../Components/About'
import Products from '../../Components/Products'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProfile } from '../../Redux/Authentication.js/AuthSlice'



const index = () => {
  // const authentication = useSelector(state=>state.authentication)
  const dispatch =  useDispatch()
 
  useEffect(()=>{
    dispatch(fetchProfile())
  },[])



  return (
    <>
    <Banner />
    <Products />
    <About title='Our Food'/>
    <About title='Fresh Ingredients' order={'1'} imageSrc={'/aboutus2.jpg'} start='start'/>
    </>
  )
}

export default index