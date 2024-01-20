import React from 'react'
import { Container, Div, Image, Nav, Navlink } from '../Global/Global'
import { IoBagOutline } from "react-icons/io5";
import styled from 'styled-components';


const Span = styled.span`
position: absolute;
width:90% ;
height: 90%;
background-color: #f97316;
border-radius: 25px;
top: 0rem;
right: -1rem;
display: flex;
justify-content: center;
align-items: center;
font-size: .9rem;
font-weight: 600;
color: #fff ;
`
const NavlinkItem = styled(Navlink)`
text-decoration: none;
color: #fff;
`


const Navbar = () => {
  return (
    <Nav $bg='#000' $color='#fff'>

    <Container $display='flex'  $ai='center' $width='95%' $LG_width='80%' $height='auto' $margin='auto' $fs='1rem' >

        <Div $display='flex' $ai='center' $width='10rem' >
            <Navlink $color='#fff' $td='none'>
                <Image $width='100%' $height='100%' $of='cover' src='/foody.png'/>
          </Navlink>
        </Div>

      <Div $flex='1' $LG_flex='4'  $display='flex' $jc='center' $gap='2rem'>
        <NavlinkItem>
          Home
        </NavlinkItem>
        <NavlinkItem >
          About
        </NavlinkItem>
      </Div>
      <Div>

      </Div>

      <Div $flex='1'  $display='flex' $jc='center' $ai='center' $gap='2rem'>
        
              <Div $position='relative' $display='flex' $jc='center' $ai='center'>
                    <IoBagOutline size='25' /> 
                    <Span>1</Span>
                </Div> 

        <NavlinkItem $td='none'>
          Log In 
        </NavlinkItem>
        <NavlinkItem $td='none'>
          Sign Up
        </NavlinkItem>
      </Div>
      <Div>

      </Div>
    </Container>
    </Nav>
  )
}

export default Navbar