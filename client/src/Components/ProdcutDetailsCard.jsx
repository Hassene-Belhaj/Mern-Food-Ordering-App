import React from 'react'
import { Div, Image, Text, Title3 } from '../Global/Global'

const ProdcutDetailsCard = ({product}) => {
    console.log(product.imageUrl.length);
  return (
      // <>
      // {product.imageUrl.length}
      // </>

<Div  $width='50%' $margin='auto' $padding='0 0 4rem 0'>
        <Div $display='flex' $jc='space-between'>
            <Title3 >{product.name}</Title3>
            <Title3 > $ {product.price}</Title3>
        </Div>

        <Div $display='flex' $jc='center' > 
            <Image $width='200px' src={product.imageUrl} />
        </Div>
        <Text $ta='center'>{product.description}</Text>

    </Div>
  )
}

export default ProdcutDetailsCard ;