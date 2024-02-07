import React from 'react'
import { Container, Div, Image, Nav, Navlink } from '../Global/Global'
import { IoBagOutline } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';

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
color: ${({$color})=>$color};
transition:all 0.3s ease-in-out;
&:hover{
  color: #10b981;
}
`

const IconBag = styled(IoBagOutline)`
color: ${({$color})=>$color};
transition:all 0.3s ease-in-out;
&:hover{
  color: #10b981;
}
`
const IconArrowDown = styled(IoIosArrowDown)`
cursor: pointer;
`


const Navbar = () => {

  const [userInfo , setUserInfo] = useState(null)
  console.log(userInfo);

 const authentication =  useSelector(state=>state.authentication)
 const dispatch = useDispatch()
 console.log(authentication.isLoggedIn);

   
const [navItem , setNavItem]  = useState(null)
const cart = useSelector(state=>state.cart)
const [bag , setBag ] = useState(0)

const location = useLocation()


useEffect(()=>{
const bagQuantity = cart.cart.reduce((accu , curr) => {
  return accu + curr.amount ;
},0)
setBag(bagQuantity) ;

},[cart.cart])


useEffect(()=>{
setNavItem(location.pathname)  
},[])


const handleLogOut = async () => {
  try {
    const {data} = await axios.post('/logout')
    dispatch(logout())
    return data
  } catch (error) {
    console.log(error);
  }
}

const fetchProfile = async() => {
  try {
    const {data} = await axios.get('/user_info')
    setUserInfo(data.resp)
  } catch (error) {
    console.log(error);
  }
}


useEffect(()=> {
  fetchProfile()
},[authentication.isLoggedIn])

  return (
    <Nav $bg='#000' $color='#fff' $width='100vw'  $height='80px'  >

    <Container  $display='flex' $height='100%'  $ai='center' $width='90%' $LG_width='80%' $gap='1rem' $margin='auto' $fs='1rem' $position='relative'>
                

              <Div $display='flex' $ai='center' $width='auto' >
                  <NavlinkItem to='/' onClick={()=>setNavItem('/home')} $color={'#fff'}>
                      <ImSpoonKnife size={22}/>
                </NavlinkItem>
              </Div>
              
            <Div $flex='1' $LG_flex='3'  $display='flex' $jc='center' $gap='1rem'>
                {['home' , 'about'].map((item, index) => {
                  return (
                     <NavlinkItem $tt='capitalize' to={item === 'home' ? '/' : `/${item}`} key={index} onClick={()=>setNavItem(`/${item}`)} 
                      $color={navItem === `/${item}` ? '#10b981' : '#fff'}  >
                        {item}
                     </NavlinkItem>
                  )
                } )}
                 
          
            </Div>
        
            <Div $flex='2'  $display='flex' $jc='end' $ai='center' $gap='2rem' $margin='0 1rem 0 0'>

                    <NavlinkItem to='/cart'>
                      <Div  $position='relative' $display='flex' $jc='center' $ai='center' $width='auto' $margin='0 1rem  0 0'>
                            <IconBag size='25' onClick={()=>setNavItem('/cart')} $color={navItem && location.pathname === '/cart' ? "#10b981" : '#fff'} /> 
                            {bag !== 0 ?  
                            <Span>{bag}</Span> : null}
                        </Div> 
                    </NavlinkItem>  

            </Div>
              
              {authentication.isLoggedIn ? 
              <Div $display='flex' $jc='center' $ai='center' $width='auto' $margin='0 2rem 0 0' $gap='2rem'>
                <Div $width='2rem' $height='2rem' $br='25px' >
                  <Image src={userInfo.profile_img} $br='25px' />
                </Div>
                  <IconArrowDown color='#fff'  />
              </Div>
              :
              <NavlinkItem to='/login' onClick={()=>setNavItem('/login')} $color={navItem === '/login' ? '#10b981' : '#fff'}>
                Login
              </NavlinkItem>}
          

          </Container>
    </Nav>
    )
  }
  
export default Navbar