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
import { useState } from 'react';
import AnimationWrapper from '../utils/AnimationWrapper';

const InputEdit = styled.input`
padding-left:${({$padding})=>$padding ? $padding : '3rem'};
width: 100%;
height: 2.5rem;
outline: none;
border: solid 2px rgba(0,0,0,0);
background-color: ${({$disabled})=>$disabled ? $disabled : "#f3f5f9"};
transition: .5s all ease-in-out;
&:focus{
  border: 2px solid #10b981;
}
border-radius: 5px;
color: #000;
font-weight: 600;
`



// regex ADDRESS
let Regex_city = /[a-zA-Z]{3,20}/gi ;
let Regex_postCode = /^[0-9]{4}$/gi ;
let Regex_Street_address = /[a-zA-Z0-9\s]/gi


const EditProfile = () => {

  const [loading , setLoading] = useState(false)
  
  const userInfo = useSelector(state=>state.userInfo)
  // console.log(userInfo.userInfo);
  // console.log(userInfo.userInfo.address);
  const dispatch =  useDispatch()


  useEffect(()=> {
    dispatch(FetchUserInfo())
  },[])
  
  const {_id , email ,username, profile_img, address } = userInfo.userInfo

  const usernameRef =  useRef()



  const handleAddress = async(e) => {
    e.preventDefault()
    let formdata = new FormData(e.target)
    let data = {} ;
    data = Object.fromEntries(formdata.entries()) ;
    const {street_address,state,city,postalCode} = data
    // if(username){
    //   if(username.length < 7 ) return  toast.error('Username must be at least 4 letters long')
    // }
    try {
      const {data} = await axios.put('/update_address' , {street_address,state,city,postalCode})
      //^ call fetchUserInfo to update username
      if(data.success === true) {
        setTimeout(() => { 
            dispatch(FetchUserInfo())
            toast.dismiss(loading)
            toast.success(data.msg)
        }, 1500)
     
      }
      const loading = toast.loading('loading')
    } catch (error) {
      const loading = toast.loading('loading')
      setTimeout(() => {  
        toast.dismiss(loading)
        toast.error(error.response.data.msg) 
      }, 1000)
      console.log(error);
      }
  }

  if(userInfo.status !== 'fulfilled') return <Spinner  />
  return (
    <Section $width='100%' $display='block' $LG_display='flex' $gap='2rem'>
      <Div $width='100%' $LG_width='15rem'   $display='flex' $jc='center' $height='auto'>
          <Div $width='8rem' $height='8rem' $margin='1rem 0'>
            <Image  $width='100%' $height='100%' $br='50%' src={profile_img} />
          </Div>
      </Div>
          
         <Form onSubmit={handleAddress}  $display='flex' $fd='column' $gap='1rem'>
           <Div>
               <Label >Username <Span $color='red'>*</Span> </Label>
            <Div  $margin='1rem 0' $width='100%' $position='relative'>
              <InputEdit ref={usernameRef} name='username' disabled $disabled='#e4e4e7' type='text' autoComplete='off' $margin='1rem 0' placeholder={username} />
              <IconUser />
            </Div>
           </Div>

          <Div>
            <Label >Email <Span $color='red'>*</Span> </Label>
            <Div $margin='1rem 0' $width='100%' $position='relative'>
              <InputEdit name='email' $disabled='#e4e4e7' type='text' autoComplete='off' placeholder={email} disabled/>
              <IconMail />
            </Div>
          </Div>   
{/* Address */}
          <Div>
            <Label >Street Address</Label>
            <Div $margin='1rem 0' $width='100%' $position='relative'>
              <InputEdit $padding='1rem' name='street_address' type='text' autoComplete='off' placeholder={address.street_address ? address.street_address : 'Street Address'}/>
            </Div>
          </Div>  

          <Div $display='flex' $gap='1rem'>

          <Div>
            <Label >City</Label>
            <Div $margin='1rem 0' $width='100%' $position='relative'>
              <InputEdit $padding='1rem' name='city' type='text' autoComplete='off' placeholder={address.city ? address.city : 'City' } />
            </Div>
          </Div>  

          <Div>
            <Label >State </Label>
            <Div $margin='1rem 0' $width='100%' $position='relative'>
              <InputEdit $padding='1rem' name='state' type='text' autoComplete='off' placeholder={address.state ? address.state  : 'State'} />
            </Div>
          </Div>  

          </Div>

          <Div $display='flex' $gap='1rem'>

          <Div>
            <Label >Country</Label>
            <Div $margin='1rem 0' $width='100%' $position='relative'>
              <InputEdit $padding='1rem' $disabled='#e4e4e7' disabled name='country' type='text' autoComplete='off' placeholder='Tunisia' />
            </Div>
          </Div>  

          <Div>
            <Label >Postal Code </Label>
            <Div $margin='1rem 0' $width='100%' $position='relative'>
              <InputEdit $padding='1rem' name='postalCode' type='text' autoComplete='off' placeholder={address.postalCode ? address.postalCode : 'Postal Code'} />
            </Div>
          </Div>  

          </Div>


          <Div $padding='1rem 0'>
            <Button $width='100%' $height='3rem' $border='none' $br='25px' $bg='#000' $color='#fff' $opacity='0.8' $transition='all ease-in-out 0.3s'>Update</Button>
          </Div>
          </Form> 
    </Section>
  )
}

export default EditProfile