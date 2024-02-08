import React from 'react'
import { Container, Div, Navlink, Text } from '../Global/Global'
import * as FontAwesome from 'react-icons/fa'
import { ImSpoonKnife } from "react-icons/im";

import styled from 'styled-components'

const ItemLink = styled(Navlink)`
text-decoration: none;
color: #fff;
transition:all 0.3s ease-in-out;
font-size: 0.9rem;
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

const Grid = styled.div`
width: 90%;
display: grid;
margin: auto;
justify-content: center;
align-items: center;
grid-template-columns: repeat(auto-fit,minmax(200px , 1fr));
gap: 2rem;
`


const Footer = () => {
   const social_network = ['Instagram' , 'Facebook' , 'Linkedin' , 'Twitter' , 'Youtube']

  return (
    <Container $width='100%' $bg='#000' $color='#fff' $padding='2rem 0 2rem 0' $margin='auto' $borderT='.5px solid rgba(255,255,255,0.1)'>

        <Div $width='80%' $margin='auto' $padding='2rem 0'>
            <ItemLink>
                    <ImSpoonKnife size={22} />
            </ItemLink>
        </Div>

            <Grid >
                {Array(4).fill(0).map((item,i)=> {
                    return (
                <Div key={i}  $display='flex' $jc='center'   $ai='center' $fd='column'  $gap='1rem' $padding='4rem 0'>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                    <ItemLink >lorem ipsum</ItemLink>
                </Div>  
                    )
                })}
          
            </Grid>
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