import React from 'react'
import { Container, Div, Image } from '../Global/Global'

const PageNotFound = () => {
  return (
    <Container $display='flex' $jc='center' $ai='center'  $width='100%' $height='100vh'>
        <Div $width='700px' height='700px'>
            <Image $width='100%' $height='100%' src={'/404.png'} />
        </Div>

    </Container>
  )
}

export default PageNotFound