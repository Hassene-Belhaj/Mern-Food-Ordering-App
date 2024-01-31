import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Div, Section, Text, Title2, Title3 } from '../../Global/Global';
import Tabs from '../../Components/Tabs';
import { useState } from 'react';
import AddressForm from '../../Components/AddressForm';
import CartSummary from '../../Components/CartSummary';


const index = () => {

 const cart = useSelector(state=>state.cart)
console.log(cart);

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

      <Section  $padding='4rem 0 0 0' $maxwidth='600px' $margin='auto' >
        {activeTab === 0 ? <CartSummary /> : null}
        {activeTab === 1 ? <AddressForm index={1} activeTab={activeTab} setActiveTab={setActiveTab}/>: null}
        {activeTab === 2 ? <>payment</> : null}
      </Section>


    </Container>

  )
}
}

export default index