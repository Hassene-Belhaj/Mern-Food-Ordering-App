import React from 'react'
import { Button, Container, Div, Image, Navlink, Section, Text, Title2 } from '../Global/Global'


const Banner = () => {
  return (

    <Section >
        <Container $display='flex'  $width='95%' $LG_width='80%' $fd='row' $LG_fd='row' $MD_fd='column' $SM_fd='column' $XS_fd='column' $margin='auto' $padding='2rem 0 0 0' $fw='wrap'  >
            <Div $flex='1' $display='flex' $jc='center' $ai='start' $fd='column' $padding='2rem' $gap='1rem'>
                <Title2 $fs='1.8rem'>Lorem ipsum dolor, sit amet consectetur lorem Ipsum Food ?</Title2>
                    <Title2 $margin='1rem 0' $fs='1.5rem' $fw='600' >Get Started Today !</Title2>
            <Div $display='flex'  $gap='1rem'>
                <Button  $fw='600' $width='10rem' $height='3rem' $outline='none' $border='none' $color='#000' $bg='#10b981' $br='25px' $opacity='0.9' $transition='all ease-in-out 0.3s '>Order Now</Button>
                <Navlink to='/menu'>
                  <Button  $fw='600' $width='10rem' $height='3rem' $color='#10b981' $outline='none' $border='2px solid #10b981' $bg='transparent' $br='25px' $opacity='0.9' $transition='all ease-in-out 0.3s '>See Menu</Button>
                </Navlink>
            </Div>    
            </Div>
            <Div $flex='1'  $display='flex' $jc='center' $ai='center'>
                <Image $width='20rem' $display='none' $LG_display='flex' $of='cover' src='/5.png'/>
            </Div>    
        </Container>
    </Section>
    )
}

export default Banner