import React from 'react'
import { Container, Div, Image, Nav, Navlink } from '../Global/Global'
import { IoBagOutline } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
import { AiOutlineMenu } from "react-icons/ai";
import styled from 'styled-components';



const Span = styled.span`
position: absolute;
width:90% ;
height: 90%;
/* background-color: #f97316; */
background-color: #10b981;
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

const IconAiOutlineMenu = styled(AiOutlineMenu)`
position: absolute;
right: 0;
top: 50%  ;
transform: translateY(-50%);
`

const Navbar = () => {






  return (
    <Nav $bg='#000' $color='#fff' $width='100vw'  $height='80px' >

    <Container  $display='flex' $height='100%'  $ai='center' $width='95%' $LG_width='80%' $gap='1rem' $margin='auto' $fs='1rem' $position='relative'>

              <Div $display='flex' $ai='center' $width='auto' >
                  <Navlink $color='#fff' $td='none'>
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
              
                    <Div $position='relative' $display='flex' $jc='center' $ai='center' $width='auto'>
                          <IoBagOutline size='21'/> 
                          <Span>1</Span>
                      </Div> 

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