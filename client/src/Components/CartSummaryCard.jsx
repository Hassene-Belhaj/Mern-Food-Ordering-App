import React, { useState } from 'react'
import { Button, Div, Image, Section, Span, Text, Title2, Title3 } from '../Global/Global'
import { useDispatch, useSelector } from 'react-redux'
import { decrementProductAmount, incrementProductAmount, removeItem } from '../Redux/Cart/cartSlice'
import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'
import { useEffect } from 'react'


const CloseIcon = styled(AiOutlineClose)`
position: absolute;
top: 0;
right: 0;
cursor: pointer;
`

const CartSummaryCard = ({product,index}) => {

  const [totalPrice , setTotalPrice] =  useState()

  const {_id , name , category , adjective , description , imageUrl  , price , amount} = product
    

    const dispatch = useDispatch()
    const cart  = useSelector(state=>state.cart)
    console.log(cart.cart);

    const incrementProduct = () => {
      dispatch(incrementProductAmount(product))
    }

    const decrementProduct = () => {
      dispatch(decrementProductAmount(product))
    }

    const removeProduct = () => {
      dispatch(removeItem(product))
    }


    useEffect(()=>{
      const PriceReduce = cart.cart.reduce((accu , curr) => {
      return  (accu  + (curr.amount * curr.price) )
      },0)
      setTotalPrice(PriceReduce)
    },[cart.cart])
    
  return (
        <Div $position='relative' $display='flex' $height='auto' $borderB='solid .5px rgba(0,0,0,0.1)'  $padding='0 0 1rem 0'>
                <CloseIcon onClick={removeProduct} size={20}  />

            <Div $flex='1' $padding='2rem'>
                <Image $width='100%' $height='100%' $of='cover' src={imageUrl} />
            </Div>

            <Div $flex='2' $display='flex' $fd='column' $padding='.5rem' $gap='1rem'>
                <Title3>{name}</Title3>
            <Text $height='8rem'  >{description}</Text>

              <Div $display='flex' $jc='space-between' $ai='center' $padding='.5rem'>
                <Text $fw='600'>${price}</Text>
                <Text $fw='600'>${price*amount}</Text>
                <Div $display='flex'>
                    <Button onClick={decrementProduct} $width='2rem' $height='2rem' $outline='none' $border='none' $bg='#10b981' $color='#fff'>-</Button>
                    <Span $width='2rem' $display='flex' $jc='center' $ai='center' $border='solid .5px #10b981' $color='#10b981' $fw='600' >{amount}</Span>
                    <Button onClick={incrementProduct} $width='2rem' $height='2rem' $outline='none' $border='none' $bg='#10b981' $color='#fff'>+</Button>
                </Div>

              </Div>
                
            </Div>
        
        </Div>
      )
}

export default CartSummaryCard