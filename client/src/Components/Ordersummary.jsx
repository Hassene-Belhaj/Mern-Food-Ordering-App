import React from 'react'
import { Button, Div, Span, Text, Title3 } from '../Global/Global'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { GrChapterNext } from 'react-icons/gr'

const Ordersummary = ({index , setActiveTab}) => {

   const cart = useSelector(state=>state.cart)
   console.log(cart.cart);
   const [totalPrice , setTotalPrice] =  useState(null)

   console.log(index);

  const Next = () => {
    setActiveTab(index+1)
  }


    useEffect(()=>{
        const PriceReduce = cart.cart.reduce((accu , curr) => {
        return  (accu  + (curr.amount * curr.price) )
        },0)
        setTotalPrice(PriceReduce)
      },[cart.cart])

  return (
    <Div $width='300px' $height='auto' $border='solid 2px rgba(0,0,0,0.1)' $br='10px' $padding='1rem' $display='flex' $fd='column' $gap='1rem'  >
        <Title3 $ta='center' $padding='1rem'>Order Summary</Title3>
           <Div >
              {cart.cart.map((product,index)=> {
                return (
                <Div $margin='4px 0' key={index}>
                  <Text  $fs='1rem' $fw='500'>{product.name}</Text>
                  <Text $fs='1rem' $fw='700'>{product.amount} X ${Math.trunc(product.price)} = ${product.amount*product.price}</Text>
                </Div>
                    )
              })}
             
           </Div>
           <Div $display='flex' $jc='space-between'>
             <Text $fs='0.9rem' $fw='500'>Subtotal :</Text>
             <Text $fs='0.9rem' $fw='700'>${totalPrice}</Text>
           </Div>
           <Div $display='flex' $jc='space-between' $padding='0 0 2rem 0' $borderB='solid rgba(0,0,0,0.2) 2px'>
             <Text $fs='0.9rem' $fw='500'>Shipping :</Text>
             <Text $fs='0.9rem' $fw='700'>$0</Text>
           </Div>
           
           <Div $display='flex' $jc='space-between'>
             <Text $fs='0.9rem' $fw='700'>Total : </Text>
             <Text $fs='0.9rem' $fw='700'>${totalPrice}</Text>
           </Div>

           <Div $width='100%' $display='flex' $jc='center' $ai='center' $padding='0 0 1rem 0'>
            <Button onClick={Next} $width='10rem' $height='3rem' $bg='#10b981' $color='#fff' $display='flex' $jc='center' $ai='center' $gap='.5rem' $outline='none' $border='none' $br='25px' $fw='600' >
                    Next
                <GrChapterNext color='#fff' size={20} />
            </Button>
        </Div>

    </Div>
  )
}

export default Ordersummary