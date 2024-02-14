import React, { useEffect } from 'react'
import { Section ,Div, Navlink, Span, Text, Title3, Title4, Title5, Button, Input, Container } from '../Global/Global'
import { Navigate, Outlet, useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile } from '../Redux/Authentication.js/AuthSlice'
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import Spinner from '../utils/Spinner'
import { useState } from 'react'
import styled from 'styled-components'
import ChangePassword from './ChangePassword'
import AnimationWrapper from '../utils/AnimationWrapper'
import EditProfile from './EditProfile'

const IconCiMenuFries = styled(CiMenuFries)`
cursor: pointer;
`

const Hr = styled.hr`
width: 12rem;
margin: .5rem 2rem .5rem 0;
border: .1px solid rgba(0,0,0,1);
`





const ProfileSideBar = () => {

    // const [pageState , setPageState] = useState('')
    const [toggleMenu , setToggleMenu] = useState(false)

    
        const authentication = useSelector(state=>state.authentication)
        const dispatch = useDispatch()
        const location = useLocation()

    useEffect(()=>{
      dispatch(fetchProfile())
    },[])


        
    const handleBlur = () => {
        setTimeout(() => {setToggleMenu(false) }, 300)
    }


    const WidthTransform = () => {
       if( window.innerWidth > 750) {
         setToggleMenu(true)
       } else {
        setToggleMenu(false)
       }
    }
    window.addEventListener('resize' , WidthTransform)

    useEffect(()=>{
     WidthTransform()
    },[])



if(authentication.status==='failed') return <Navigate to='/login' /> // if not authenticated redirect to /home
else if(authentication.status === 'loading') return <Div $width='100%' $height='100vh'> <Spinner/></Div> // waiting fecth result
else {
    return (
    <Container  $width='80%' $height='100vh' $padding='4rem 0 0 0' $margin='auto' $gap='1rem' >

         <Div $display='block' $MD_display='none'>
            <Outlet />
         </Div>

    <Section $display='flex' $padding='4rem 0' >
         
 
        {/* // left column */}
        <Div $display='flex' $fd='column'>
                  <Div $display='flex' $jc='start' $ai='center' $width='100%' $gap='2rem' $padding='0 0 2rem 0'>
                     <Button onClick={()=>setToggleMenu(!toggleMenu)} onBlur={handleBlur} $bg='transparent' $outline='none' $border='none' $display='inline-block' $MD_display='none'>
                       <IconCiMenuFries size='25'  />  
                     </Button>
                      <Title3 $fw='500'>Settings</Title3>
                 </Div> 
            <Hr/>

            {toggleMenu ? 
           <Div $padding='4rem 0 0 0' $width='auto' $display='flex' $fd='column' $gap='2rem' >

                    <Div $display='flex' $width='100%' $padding='1rem' $ai='center' $height='3rem'  $gap='1rem'>
                            <FaBell />
                            <Text>Notification</Text>
                    </Div>
               
                    <Navlink to='/settings/edit_profile' $td='none' $color='#000'>
                        <Div $display='flex' $width='100%' $height='4rem'  $ai='center' $gap='1rem' 
                        $borderR={location.pathname === '/settings/edit_profile' ? '.5px solid rgba(0,0,0,0.5)' : null}
                        $bg={location.pathname === '/settings/edit_profile' ? ' #f3f5f9' : null}
                        $transition='all ease-in-out 0.2s'
                        $padding='1rem'
                        >
                                    <FaUser />
                                    <Text >Edit Profile</Text>
                        </Div>
                    </Navlink>

                    <Navlink to='/settings/change_password' $td='none' $color='#000'>
                        <Div $display='flex' $width='100%' $height='4rem'  $ai='center' $gap='1rem' 
                        $borderR={location.pathname === '/settings/change_password' ? '.5px solid rgba(0,0,0,0.5)' : null}
                        $bg={location.pathname === '/settings/change_password' ? ' #f3f5f9' : null}
                        $transition='all ease-in-out 0.2s'
                        $padding='1rem'
                        >
                            <FaKey />
                            <Text >Change Password</Text>
                        </Div>
                    </Navlink>
        
            </Div> 

        :
        <>
        {location.pathname === '/settings/edit_profile'  ?
        <Div $width='100%' >

            <AnimationWrapper initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 0.8}} key={location.pathname}>
                <Div $padding='4rem 0 0 0' $maxwidth='400px'>
                      <EditProfile />
                </Div>
            </AnimationWrapper>
        </Div>
    
            :
            <AnimationWrapper initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 0.8}}>
                <Div $padding='4rem 0 0 0' $width='270px'>
                        <ChangePassword />
                </Div>
            </AnimationWrapper>
}  
        </>
            
        } 
          
        </Div> 
          {/* // right column */}
             <Div $width='100%' $padding='0 0rem 0 4rem' $display='none' $MD_display='block '>
                 <Outlet />
                  {location.pathname === '/settings/edit_profile' ?
                  
                        <AnimationWrapper initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 0.8}} key={location.pathname}>
                          <Div $padding='4rem 0 0 0' $maxwidth='400px'>
                          <EditProfile  />
                          </Div>
                      </AnimationWrapper>
                    :
                    <AnimationWrapper initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 0.8}}>
                        <Div $padding='4rem 0 0 0' $maxwidth='400px'>
                                <ChangePassword  />
                        </Div>
                    </AnimationWrapper>
                }
            </Div>
   
        </Section>

</Container>
    
        )
    }
    
}
    

export default ProfileSideBar