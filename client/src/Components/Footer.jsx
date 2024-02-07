import React from 'react'
import { Container, Div, Navlink, Text } from '../Global/Global'
import * as FontAwesome from 'react-icons/fa'
import { ImSpoonKnife } from "react-icons/im";

import styled from 'styled-components'

const ItemLink = styled(Navlink)`
text-decoration: none;
color: #fff;
transition:all 0.3s ease-in-out;
&:hover{
  color: #10b981;
}
min-width: 8rem;
`
const ItemLinkSocial = styled(Navlink)`
text-decoration: none;
color: #fff;
transition:all 0.3s ease-in-out;
&:hover{
  color: #D5D5D5;
}
`


const Footer = () => {
   const social_network = ['Instagram' , 'Facebook' , 'Linkedin' , 'Twitter' , 'Youtube']

  return (
    <Container $width='100%' $bg='#000' $color='#fff' $padding='2rem 0 2rem 0' $margin='auto'>

        <Div $width='80%' $margin='auto' $padding='2rem 0'>
            <ItemLink>
                    <ImSpoonKnife size={22} />
            </ItemLink>
        </Div>

            <Div $width='90%' $fw='wrap' $color='#fff' $display='flex'  $margin='auto' >
                
                <Div  $flex='1' $display='flex' $jc='center'   $ai='start' $fd='column' $padding='5rem' $gap='1rem'>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                </Div>  
                <Div  $flex='1' $display='flex'  $jc='center'  $ai='start' $fd='column' $padding='5rem' $gap='1rem'>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                </Div>  
                <Div  $flex='1' $display='flex'  $jc='center'  $ai='start' $fd='column' $padding='5rem' $gap='1rem'>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                </Div>  
                <Div  $flex='1' $display='flex'  $jc='center'  $ai='start' $fd='column' $padding='5rem' $gap='1rem'>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                </Div> 
            </Div>
                    <Div $display='flex' $jc='center' $color='#fff' $padding='2rem 0 2rem 0' >
                        <Text>All Rights Reserverd @Mern food 2024</Text>
                    </Div>
                  <Div $padding='2rem 0' $display='flex' $gap='2rem' $jc='center' $fw='wrap'> 
                    {social_network.map((icon,i)=> {
                        return (
                            <ItemLinkSocial key={i} to={`https://www.${icon}.com`}>
                                {React.createElement(FontAwesome[`Fa${icon}`])}
                            </ItemLinkSocial>
                        )
                    })}
                    </Div>  
   
</Container>
  )
}

export default Footer