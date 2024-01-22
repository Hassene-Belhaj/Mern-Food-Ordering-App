import React from 'react'
import { Div, Image, Text, Title3} from '../Global/Global'




const ProductCard = ({product}) => {
 
    const {_id , name , adjective  , description , category  , imageUrl , price, updatedAt } = product

    // console.log(category.name);

    return (
      <Div $width='300px'  $display='flex' $fd='column' $gap='.5rem' $border='.5px solid rgba(0,0,0,0.2)' $padding='1rem 0' $br='3px'>
            <Div $width='100%'>
                <Image $width='100%' $of='cover' src={imageUrl} />
            </Div>
            <Title3 $ta='center'>{name}</Title3>
            <Text $ta='center' $height='10rem'>{description}</Text>
            <Title3 $ta='center'>${price}</Title3>


      </Div>
    )
}


export default ProductCard ;