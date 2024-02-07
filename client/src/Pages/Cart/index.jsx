import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Div, Section, Text, Title2, Title3 } from '../../Global/Global';
import Tabs from '../../Components/Tabs';
import { useState } from 'react';
import AddressForm from '../../Components/AddressForm';
import CartSummary from '../../Components/CartSummary';
import Ordersummary from '../../Components/Ordersummary';
import AuthenticationFormItem from '../../Components/AuthenticationFormItem';
import axios from 'axios';
import { useEffect } from 'react';
import Payment from '../../Components/Payment';



const index = () => {
  const cart = useSelector(state=>state.cart)
  // console.log(cart);

  const [userProfile , setUserProfile ] = useState(undefined)
  const [time , setTime] = useState(null)




  console.log(time);


 const tabs = ['Summary' , 'Delivery' , 'Payment' ]

 const Height =`calc(100vh - 80px)`

 const [activeTab , setActiveTab] = useState(0)
 const height = `calc(100vh - 80px)`



   if(cart.cart.length === 0) return  <Container $width='100%' $height={height}  $padding='5rem 0 0 0' $color='#000' $bg='#fff'><Text $ta='center' $fw='500' $padding='5rem 0 0 0'>Your Cart Is empty </Text></Container>
   else {
     return (
     <Container  $width='100vw' $height={height}  $padding='4rem 0 0 0' $color='#000' $bg='#fff' $of_y='auto' $of_x='hidden'>

        <Div  $display='flex' $jc='center'  $gap='2rem' $width='100vw' $height='40px' $padding='0 0 4rem 0'  $margin='auto' $tt='uppercase' >
          {tabs.map((tab , index) => {
            return (
              <Tabs key={index} index={index} list={tab} activeTab={activeTab} setActive={setActiveTab} switchColor='#000' tabColor='#000' />
              )
            })}
        
        </Div>

      <Section  $padding='4rem 0 0 0' $width='95%'  $margin='auto' >
        <Div $display='flex' $jc='center' $gap='4rem'>
             {activeTab === 0 ? 
          <>
             <Div $maxwidth='600px' $padding='0 0 0 2rem'>
             <CartSummary /> 
           </Div>

           <Div $display='flex' $ai='center' $fd='column' >
             <Ordersummary index={0} activeTab={activeTab} setActiveTab={setActiveTab}/>
           </Div>
          </>
             : null}

        </Div>

        <Div $maxwidth='500px' $display='flex' $margin='auto' >
            {activeTab === 1 ? 
            <>
            {userProfile === undefined ?
            <AuthenticationFormItem type='/login' padding='2rem 0'/> 
            :
            <AddressForm index={1} activeTab={activeTab} setActiveTab={setActiveTab}/>}
            </>
            :
            null }
        </Div>

        {activeTab === 2 ? <Payment /> : null}
      </Section>


    </Container>

  )
}
}

export default index