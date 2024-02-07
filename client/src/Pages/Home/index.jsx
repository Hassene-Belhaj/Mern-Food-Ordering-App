import React from 'react'
import Banner from '../../Components/Banner'
import About from '../../Components/About'
import Products from '../../Components/Products'
import Footer from '../../Components/Footer'
import { useEffect } from 'react'



const index = () => {


  // const  profile = async() => {
  //   try {
  //     const {data} = await axios.get('/profile') ;
  //     setUserProfile(data.user)
  //   } catch (error) {
  //     console.log(error);
  //   }

  // }

  // useEffect(()=>{
  //   profile()
  // },[])



  return (
    <>
    <Banner />
    <Products />
    <About title='Our Food'/>
    <About title='Fresh Ingredients' order={'1'} imageSrc={'/aboutus2.jpg'} start='start'/>
    <Footer />
    </>
  )
}

export default index