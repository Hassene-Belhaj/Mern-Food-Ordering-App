import React from 'react'
import { Button, Container, Div, Image, Nav, Navlink } from '../Global/Global'
import { IoBagOutline } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import Spinner from '../utils/Spinner';
import DropDwonMenu from './DropDwonMenu';
import { fetchProfile } from '../Redux/Authentication.js/AuthSlice';
import toast  from 'react-hot-toast';

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
transition:all 0.5s ease-in-out;
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
transform:${({$dropDown})=>$dropDown ? 'rotate(180deg)'  : null };
transition: all ease-in-out 0.25s;
`


const Navbar = () => {
  
  const [userInfo , setUserInfo] = useState(null)
  const [dropDown , setDropDown] = useState(false)  
  const [loading , setLoading] = useState(false)
  // console.log(userInfo);

  const navigate = useNavigate()

 const authentication =  useSelector(state=>state.authentication)
 
 const dispatch = useDispatch()

const cart = useSelector(state=>state.cart)
const [bag , setBag ] = useState(0)

const location = useLocation()


useEffect(()=>{
const bagQuantity = cart.cart.reduce((accu , curr) => {
  return accu + curr.amount ;
},0)
setBag(bagQuantity) ;
},[cart.cart])



const handleLogOut = async () => {
  try {
    const {data} = await axios.post('/logout')
    console.log(data.msg);
    setTimeout(() => { 
      toast.success(data.msg)
     }, 500)
    setTimeout(() => {
      navigate('/')
      window.location.reload()
    }, 1500)

  } catch (error) {
    console.log(error);
  }
}




const handleBlur = () => { 
  setTimeout(() => {
  setDropDown(false)
   }, 300)
 }



const fetchUserInfo = async() => {
  setLoading(true)
  try {
    const {data} = await axios.get('/user_info')
    setUserInfo(data.resp)
  } catch (error) {
    setTimeout(() => { 
      setLoading(false)
    }, 400)
    // console.log(error);
  }
  setTimeout(() => { 
    setLoading(false)
   }, 400)
  
}


useEffect(()=> {
  fetchUserInfo()
},[authentication.status === 'fulfilled'])



  return (
  <Nav $bg='#000' $color='#fff' $width='100vw' $height='80px' >
  
      <Container $width='100%' $height='100%' $bg='#000'>

         <Div $display='flex' $height='100%'  $ai='center' $width='80%' $gap='1rem' $margin='auto' $fs='1rem' $position='relative' >

            {/* dropdown menu */}
            {authentication.isLoggedIn && userInfo !== null ? 
           <DropDwonMenu dropDown={dropDown} setDropDown={setDropDown}  userInfo={userInfo} handleLogOut={handleLogOut}/>
            : 
            null
            }

            <Div $display='flex' $jc='center' $ai='center' $width='100%' $height='100%' $bg='#000' $position='absolute' $zindex='800'>

                <Div $display='flex' $ai='center' $width='auto' >
                    <NavlinkItem to='/' $color={'#fff'}>
                        <ImSpoonKnife size={22}/>
                  </NavlinkItem>
                </Div>
                
                <Div $flex='1' $LG_flex='3'  $display='flex' $jc='center' $gap='1rem' $margin='0 0 0 2rem'>
                        <NavlinkItem $tt='capitalize' to='/'  $color={location.pathname === '/' ? "#10b981" : '#fff'}>
                            home
                        </NavlinkItem>
                        <NavlinkItem $tt='capitalize' to='/about' $color={location.pathname === '/about' ? "#10b981" : '#fff'}>
                            about
                        </NavlinkItem>
                </Div>
            
                <Div $flex='2'  $display='flex' $jc='end' $ai='center' $gap='2rem' $margin='0 1rem 0 0'>

                        <NavlinkItem to='/cart'>
                          <Div  $position='relative' $display='flex' $jc='center' $ai='center' $width='auto' $margin='0 1rem  0 0'>
                              <IconBag size='25' $color={location.pathname === '/cart' ? "#10b981" : '#fff'}/> 
                              {bag !== 0 ?  
                              <Span>{bag}</Span> : null}
                            </Div> 
                        </NavlinkItem>  

                </Div>
                    <>
                      {userInfo ? 
                      <Div $display='flex' $jc='center' $ai='center' $width='auto'  $gap='1rem'>
                          <Div $width='1.5rem' $height='1.5rem' $br='50%' >
                          <Image src={userInfo?.profile_img} $br='50%' />
                          </Div>
                      <Button  $width='auto' $height='auto' $bg='transparent' $outline='none' $border='none' onClick={()=>setDropDown(!dropDown)}  onBlur={handleBlur}>
                         <IconArrowDown color='#fff' $dropDown={dropDown}  />
                      </Button>
                      </Div>
                      :
                    <Div $display='flex' $ai='center' $width='3rem'>
                        {loading && userInfo ?
                        <Spinner padding='0rem' spinnerWidth={'15px'} spinnerHeight={'15px'} /> 
                        :
                        <NavlinkItem $margin='6px 0 0 0' to='/login' $color={location.pathname === '/login' ? '#10b981' : '#fff'}>
                            <LuUser2 size={23}/>
                        </NavlinkItem> 
                        }
                    </Div>

}
                    </>
        </Div>
</Div>
        </Container>

        
    </Nav>
    )
  }
  
export default Navbar