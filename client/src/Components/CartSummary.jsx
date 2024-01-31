import React from 'react'
import { useSelector } from 'react-redux'
import { Div, Section } from '../Global/Global';
import CartSummaryCard from './CartSummaryCard';

const CartSummary = () => {
   const cart = useSelector(state=>state.cart)
   console.log(cart.cart);
  return (
    <Section>
        <Div $display='flex' $fd='column' $gap='3rem' $padding='0 0 2rem 0'>
            {cart.cart.map((product , index)=> {
              return (
                <CartSummaryCard key={index} index={index} product={product} />
              )

            })}
        </Div>
    </Section>
  )
}

export default CartSummary