import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { FetchUserInfo } from '../Redux/User_info/UserInfoSlice';
import Spinner from '../utils/Spinner';
import { Div, Image, Input, Section } from '../Global/Global';
import styled from 'styled-components';
import { IconMail, IconUser } from './AuthenticationFormItem';

const InputEdit = styled(Input)`
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

  if(userInfo.status !== 'fulfilled') return <Spinner  />
  return (
    <Section $display='flex' $fd='column' $gap='2rem'>
          <Div $width='10rem' $height='10rem' $margin='auto'>
            <Image  $width='100%' $height='100%' $br='50%' src={profile_img} />
          </Div>
            <Div $width='100%' $position='relative'>
              <InputEdit placeholder={username} />
              <IconUser />
            </Div>
            <Div $width='100%' $position='relative'>
              <InputEdit placeholder={email} />
              <IconMail />
            </Div>
    </Section>
  )
}

export default EditProfile