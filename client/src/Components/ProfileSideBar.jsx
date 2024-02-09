import React, { useEffect } from 'react'
import { Div, Title3, Title4 } from '../Global/Global'
import { Navigate, Outlet } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile } from '../Redux/Authentication.js/AuthSlice'
import Spinner from '../utils/Spinner'
import { useState } from 'react'

const ProfileSideBar = () => {

    const [loading , setLoading] = useState(true)
    const authentication = useSelector(state=>state.authentication)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        setLoading(true)
        dispatch(fetchProfile())
        setTimeout(() => {setLoading(false) }, 300)
       
    },[])
    
    console.log(authentication.isLoggedIn);



if(loading) return <Div $width='100%' $height='100vh'><Spinner/></Div>
else {
    return (
        authentication.isLoggedIn ? 
        <Div $width='100%' $height='100vh' $padding='2rem'>
        <Title3 $fw='500'>Dashbord</Title3>
        <Outlet />
        </Div> 
        :
        <Navigate to='/login'/>
        )
    }
}
    

export default ProfileSideBar