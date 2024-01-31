import React from 'react'
import { Button, Div, Image, Text, Title3 } from '../Global/Global'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/Cart/cartSlice'

const MenuProdcutDetailsCard = ({product}) => {


const dispatch = useDispatch()
const cart = useSelector(state=>state.cart)

const addProduct = () => {
  dispatch(addToCart(product))
}

console.log(cart.cart);

  return (
  <Div $width='350px' $height='auto' $margin='auto' $padding='0 0 6rem 0'>
        <Div $display='flex' $jc='space-between' $ai='center'>
            <Title3 $fs='1rem'>{product.name}</Title3>
            <Title3 $fs='0.9rem'> ${product.price}</Title3>
        </Div>

        <Div $display='flex' $jc='center' > 
            <Image $width='200px' src={product.imageUrl} />
        </Div>
        <Text $fs='0.9rem' $ta='center' $height='100px'>{product.description}</Text>
        <Div $display='flex' $jc='center' $padding='2rem 0'>
        <Button onClick={addProduct} $fw='700' $fs='.9rem' $width='10rem' $height='3rem' $outline='none' $border='none' $bg='#10b981' $br='25px' $opacity='0.9' $transition='all ease-in-out 0.3s '>Add To Cart</Button>

        </Div>


    </Div>
  )
}

export default MenuProdcutDetailsCard ;