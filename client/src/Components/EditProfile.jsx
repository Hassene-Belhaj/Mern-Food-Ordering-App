import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { FetchUserInfo } from '../Redux/User_info/UserInfoSlice';
import Spinner from '../utils/Spinner';
import { Button, Div, Form, Image, Input, Label, Section, Span } from '../Global/Global';
import styled from 'styled-components';
import { IconMail, IconUser } from './AuthenticationFormItem';
import { useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Toast from '../utils/Toast';
import { useState } from 'react';

const InputEdit = styled.input`
padding: 0 0 0 3rem;
width: 100%;
height: 2.5rem;
outline: none;
border: solid 2px rgba(0,0,0,0);
background-color: #f3f5f9;
transition: .5s all ease-in-out;
&:focus{
  border: 2px solid #10b981;
}
border-radius: 5px;
color: #000;
font-weight: 600;
`



const EditProfile = () => {
  const userInfo = useSelector(state=>state.userInfo)
  // console.log(userInfo.userInfo);
  const dispatch =  useDispatch()


  useEffect(()=> {
    dispatch(FetchUserInfo())
  },[])
  
  const {_id , email ,username, profile_img } = userInfo.userInfo

  const usernameRef =  useRef()



  const handleEditUsername = async(e) => {
    e.preventDefault()
    let formdata = new FormData(e.target)
    let data = {} ;
    data = Object.fromEntries(formdata.entries()) ;
    const {username} = data
    if(username){
      if(username.length < 4 ) return  toast.error('Username must be at least 4 letters long')
    }
     try {
      const {data} = await axios.put('/edit_profile' , {username})
      if(data.success === true) {
        toast.success(data.msg)
        usernameRef.current.value = ''
      }
      //^ call fetchUserInfo to update username
      
      dispatch(FetchUserInfo())
    } catch (error) {
      console.log(error);
    }
  }

  if(userInfo.status !== 'fulfilled') return <Spinner  />
  return (
    <Section>
       <Toast />
          <Div $width='10rem' $height='10rem'  $margin='1rem auto'>
            <Image  $width='100%' $height='100%' $br='50%' src={profile_img} />
          </Div>
         <Form onSubmit={handleEditUsername}  $display='flex' $fd='column' $gap='1rem'>
           <Div>
               <Label >Username</Label>
            <Div  $margin='1rem 0' $width='100%' $position='relative'>
              <InputEdit ref={usernameRef} name='username' type='text' autoComplete='off' $margin='1rem 0' placeholder={username} />
              <IconUser />
            </Div>
           </Div>

          <Div>
            <Label >Email <Span $color='red'>*</Span> </Label>
            <Div $margin='1rem 0' $width='100%' $position='relative'>
              <InputEdit name='email' type='text' autoComplete='off' placeholder={email} disabled/>
              <IconMail />
            </Div>
          </Div>   
          <Div $padding='2rem 0'>
            <Button $width='100%' $height='3rem' $border='none' $br='25px' $bg='#000' $color='#fff' $opacity='0.8' $transition='all ease-in-out 0.3s'>Update</Button>
          </Div>
          </Form> 
    </Section>
  )
}

export default EditProfile