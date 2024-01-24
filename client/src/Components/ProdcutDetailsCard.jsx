import React from 'react'
import { Div, Image, Title3 } from '../Global/Global'

const ProdcutDetailsCard = ({product}) => {
  return (
    
    <Div  $gap='.5rem'>
        <Title3>{product.name}</Title3>
        <Div $width='200px'> 
            <Image $width='100%' src={product.imageUrl} />
        </Div>
        <Title3> ${product.price}</Title3>

    </Div>
  )
}

export default ProdcutDetailsCard ;