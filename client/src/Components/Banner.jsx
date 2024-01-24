import React from 'react'
import { Button, Container, Div, Image, Navlink, Section, Text, Title2 } from '../Global/Global'


const Banner = () => {
  return (

    <Section $bg='#000' $color='#fff' >
        <Container $display='flex'  $width='95%' $LG_width='80%' $fd='row' $LG_fd='row' $MD_fd='column' $SM_fd='column' $XS_fd='column' $margin='auto' $padding='2rem 0 0 0' $fw='wrap'  >
            <Div $flex='1' $display='flex' $jc='center' $ai='start' $fd='column' $padding='2rem' $gap='1rem'>
                <Title2 $fs='2rem'>Lorem ipsum dolor, sit amet consectetur lorem Ipsum Food ?</Title2>
                    <Text $margin='1rem' $fw='600'>Get Started Today !</Text>
            <Div $display='flex'  $gap='1rem'>
                <Button  $fw='600' $width='10rem' $height='3rem' $outline='none' $border='none' $bg='#f97316' $br='25px' $opacity='0.9' $transition='all ease-in-out 0.3s '>Order Now</Button>
                <Navlink to='/menu'>
                  <Button  $fw='600' $width='10rem' $height='3rem' $color='#f97316' $outline='none' $border='3px solid #f97316' $bg='transparent' $br='25px' $opacity='0.9' $transition='all ease-in-out 0.3s '>See Menu</Button>
                </Navlink>
            </Div>    
            </Div>
            <Div $flex='1'  $display='flex' $jc='center' $ai='center'>
                <Image $width='40%'  $of='cover' src='/pizza_banner2.png'/>
            </Div>    
        </Container>
    </Section>
    )
}

export default Banner