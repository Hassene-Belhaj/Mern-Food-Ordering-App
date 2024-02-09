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
import toast , {Toaster} from 'react-hot-toast';

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
transform:${({$dropDown})=>$dropDown ? 'rotate(180deg)'  : null };
transition: all ease-in-out 0.3s;
`


const Navbar = () => {
   
  const [userInfo , setUserInfo] = useState(null)
  const [dropDown , setDropDown] = useState(false)  
  const [loading , setLoading] = useState(false)
  // console.log(userInfo);

  const navigate = useNavigate()

 const authentication =  useSelector(state=>state.authentication)
 const dispatch = useDispatch()
//  console.log(authentication.isLoggedIn);

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
    console.log(data.msg);
    toast.success(data.msg)
    window.location.reload()
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
    setLoading(false)
  } catch (error) {
    setLoading(false)
    console.log(error);
  }
}


useEffect(()=> {
  fetchUserInfo()
},[authentication.isLoggedIn === true])

useEffect(()=>{
dispatch(fetchProfile())
},[location.pathname])

  return (
    <Nav $bg='#000' $color='#fff' $width='100vw' $height='80px' >
              <Toaster
     position='top-center'
      containerStyle={{
      position: 'absolute',
      top : '80px' ,
      right : '0'
    }}
    toastOptions={{
      style : {
        borderRadius : '0px' ,
        display : 'flex' ,
        justifyContent : 'center' ,
        alignItems : 'center' ,
        flexDirection : 'column' ,
        gap : '.5rem' ,
        background : '#fff' ,
        color : '#000',
        padding : '1rem' ,
        fontSize : '0.8rem' ,
        fontWeight : '600' ,
        textAlign : 'center',
      },
      success : {
        duration : 500 ,
        iconTheme: {
          primary: '#14b8a6',
        },
      },
      error : {
        duration : 1000 ,
        iconTheme: {
          primary: '#e11d48',
        },
      }
    }}
    />

    
      <Container $width='100%' $height='100%' $bg='#000'>

         <Div $display='flex' $height='100%'  $ai='center' $width='80%' $gap='1rem' $margin='auto' $fs='1rem' $position='relative' >

            {/* dropdown menu            */}
            {authentication.isLoggedIn && userInfo !== null ? 
           <DropDwonMenu dropDown={dropDown} setDropDown={setDropDown}  userInfo={userInfo} handleLogOut={handleLogOut}/>
            : 
            null
            }
            <Div $display='flex' $jc='center' $ai='center' $width='100%' $height='100%' $bg='#000' $position='absolute' $zindex='800'>

                <Div $display='flex' $ai='center' $width='auto' >
                    <NavlinkItem to='/' onClick={()=>setNavItem('/home')} $color={'#fff'}>
                        <ImSpoonKnife size={22}/>
                  </NavlinkItem>
                </Div>
                
                <Div $flex='1' $LG_flex='3'  $display='flex' $jc='center' $gap='1rem' $margin='0 0 0 2rem'>
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
                    <>
                      {authentication.isLoggedIn ? 
                      <Div $display='flex' $jc='center' $ai='center' $width='auto'  $gap='1rem'>
                          <Div $width='1.5rem' $height='1.5rem' $br='25px' >
                          <Image src={userInfo?.profile_img} $br='25px' />
                          </Div>
                      <Button  $width='auto' $height='auto' $bg='transparent' $outline='none' $border='none' onClick={()=>setDropDown(!dropDown)}  onBlur={handleBlur}>
                         <IconArrowDown color='#fff' $dropDown={dropDown}  />
                      </Button>
                      </Div>

:
<>
                        {loading ?
                        <Spinner padding='0rem' spinnerWidth={'30px'} spinnerHeight={'30px'} /> 
                        :
                        <NavlinkItem $margin='4px 0 0 0' to='/login' onClick={()=>setNavItem('/login')} $color={navItem === '/login' ? '#10b981' : '#fff'}>
                            <LuUser2 size={23}/>
                        </NavlinkItem> 
                        }
                    </>

}
                    </>
        </Div>
</Div>
        </Container>

        
    </Nav>
    )
  }
  
export default Navbar