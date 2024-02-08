import React from 'react'
import Banner from '../../Components/Banner'
import About from '../../Components/About'
import Products from '../../Components/Products'



const index = () => {


 



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