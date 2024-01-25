import React from 'react'
import { Button, Div, Image, Text, Title3} from '../Global/Global'
import { MdAdd } from 'react-icons/md'




const ProductCard = ({product , addProduct}) => {
 
    const {_id , name , adjective  , description , category  , imageUrl , price, updatedAt } = product


    return (
      <Div $width='300px' $display='flex' $fd='column' $ai='center' $gap='.5rem' 
       $padding='.5rem' $br='7px' $bg='#000' $color='#fff'>
            <Div $width='100%' $display='flex' $jc='center'>
                <Image $width='70%' $of='cover' src={imageUrl} />
            </Div>
            <Title3 $ta='center'>{name}</Title3>
            <Text $fs='0.8rem' $ta='center' $height='110px'>{description}</Text>
             <Div $width='95%' $display='flex' $jc='space-between' $ai='center'>
                    <Title3 $ta='center'>$ {price}</Title3>
                        <Button  onClick={()=>addProduct(product)} $display='flex' $jc='center' $ai='center' $fw='800' $width='5rem' $height='2.5rem' $outline='none' $border='none' $bg='#10b981'  $br='25px' $opacity='0.9' $transition='all ease-in-out 0.3s' $margin='.5rem 0'>
                            <MdAdd size={25} />
                        </Button>

             </Div>



      </Div>
    )
}


export default ProductCard ;