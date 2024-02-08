import React from 'react'
import { Container, Div, Text } from '../Global/Global'

const Test = () => {
  return (
    <Container $height='80px' $width='100%' $bg='red' $position='relative'> 
    
       <Div $height='100%' $width='100%' $bg='orange' $position='absolute' $zindex='10' $display='flex' $jc='center' $ai='center'  $gap='5rem'>
          <Text>lorem</Text>
          <Text>lorem</Text>
          <Text>lorem</Text>
          <Text>lorem</Text>
       </Div>

       <Div $height='80px' $width='30%' $bg='blue' $position='absolute' $top='60px' $zindex='5' ></Div>
    </Container>
  )
}

export default Test