import React from 'react'
import { Container, Div, Image, Nav, Navlink } from '../Global/Global'
import { IoBagOutline } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
import { AiOutlineMenu } from "react-icons/ai";
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

const Span = styled.span`
position: absolute;
width:100% ;
height: 100%;
background-color: #10b981;
border-radius: 25px;
top: -.5rem;
right: -1.1rem;
display: flex;
justify-content: center;
align-items: center;
font-size: .75rem;
font-weight: 600;
color: #fff ;
`
const NavlinkItem = styled(Navlink)`
text-decoration: none;
color: #fff;
transition:all 0.5s ease-in-out;
&:hover{
  color: #10b981;
}
`

const IconAiOutlineMenu = styled(AiOutlineMenu)`
position: absolute;
right: 0;
top: 50%  ;
transform: translateY(-50%);
`

const Navbar = () => {
  const cart = useSelector(state=>state.cart)

  const [bag , setBag ] = useState(0)

useEffect(()=>{
const bagQuantity = cart.cart.reduce((accu , curr) => {
  return accu + curr.amount ;
},0)
setBag(bagQuantity) ;

},[cart.cart])



  return (
    <Nav $bg='#000' $color='#fff' $width='100vw'  $height='80px' >

    <Container  $display='flex' $height='100%'  $ai='center' $width='95%' $LG_width='80%' $gap='1rem' $margin='auto' $fs='1rem' $position='relative'>

              <Div $display='flex' $ai='center' $width='auto' >
                  <Navlink to='/' $color='#fff' $td='none'>
                      <ImSpoonKnife size={22}/>
                </Navlink>
              </Div>
              
            <Div $flex='1' $LG_flex='3'  $display='flex' $jc='center' $gap='2rem'>
                  <NavlinkItem>
                    Home
                  </NavlinkItem>
                  <NavlinkItem >
                    About
                  </NavlinkItem>
            </Div>
        
            <Div $flex='1'  $display='flex' $jc='end' $ai='center' $gap='2rem'>

                    <Navlink to='/cart' $td='none' $color='#fff'>
                      <Div  $position='relative' $display='flex' $jc='center' $ai='center' $width='auto'>
                            <IoBagOutline size='25'/> 
                            <Span>{bag}</Span>
                        </Div> 
                    </Navlink>

              <NavlinkItem $td='none'>
                Login 
              </NavlinkItem>
              <NavlinkItem $td='none'>
                SignUp
              </NavlinkItem>
            </Div>
           

          </Container>
    </Nav>
    )
  }
  
export default Navbar