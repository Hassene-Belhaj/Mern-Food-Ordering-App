import React from 'react'
import { Button, Div, Form, Input , Navlink, Text, Title2 } from '../Global/Global'
import styled from 'styled-components'
import { FaRegEye , FaRegEyeSlash  } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md"
import { useState } from 'react';
import AnimationWrapper from '../utils/AnimationWrapper'


const IconOpenEye = styled(FaRegEye)`
position: absolute;
top: 50%;
right: 1rem;
transform: translateY(-50%);
cursor : pointer ;
`

const IconCloseEye = styled(FaRegEyeSlash)`
position: absolute;
top: 50%;
right: 1rem;
transform: translateY(-50%);
cursor : pointer ;
`

const IconUser = styled(FiUser)`
position: absolute;
top: 50%;
left: 1rem;
transform: translateY(-50%);
`
const IconMail = styled(MdOutlineEmail)`
position: absolute;
top: 50%;
left: 1rem;
transform: translateY(-50%);
`
const IconKey = styled(IoKeyOutline)`
position: absolute;
top: 50%;
left: 1rem;
transform: translateY(-50%);
`

const AuthenticationFormItem = ({handleSubmitAuth,type,padding}) => {

    const [toggle , setToggle] = useState(false)

    const handleToggle = (e) => { 
        setToggle(!toggle)
    }




  return (

  <Div $width='400px' $padding={padding ? padding : '8rem 0'} $margin='auto' >
    <Title2 $padding='0 0 4rem 0' $ta='center'>{type=== 'register' ? 'Join Us to Day' : 'Welcome Back'}</Title2>
     
<AnimationWrapper initial={{opacity : 0}} animate={{opacity : 1}} exit={{opacity : 0}} transition={{duration : 0.8}} key={type}> 

        <Form  $display='flex' $fd='column' $gap='2rem' onSubmit={handleSubmitAuth}>
            {type === 'register' && 
                <Div $position='relative' $width='100%' $height='2.5rem' $margin='auto' $br='5px'>
                    <Input $fw='600' $colorPH='#000' name='username' placeholder='Username' type='text' autoComplete='off' $width='100%' $height='100%' $bg='#f3f5f9' $outline='none' $border='2px solid rgba(0,0,0,0)' $borderF='2px solid #10b981' $transition='all ease-in-out 0.4s' $padding='0 0 0 3rem' $br='5px'/>
                    <IconUser size={20}  />
                </Div>}


            <Div $position='relative' $width='100%' $height='2.5rem' $margin='auto' $br='5px'>
                <Input $fw='600' $colorPH='#000' name='email' type='email' placeholder='Email' autoComplete='off'   $width='100%' $height='100%' $bg='#f3f5f9' $outline='none' $border='2px solid rgba(0,0,0,0)' $borderF='2px solid #10b981' $transition='all ease-in-out 0.4s' $padding='0 0 0 3rem' $br='5px'/>
                <IconMail size={20}  />
            </Div>

            <Div $position='relative' $width='100%' $height='2.5rem' $margin='auto' $br='5px'>
                <Input $fw='600' $colorPH='#000' name='password' type={toggle ? 'text' : 'password'}  placeholder='Password' $width='100%' $height='100%' $bg='#f3f5f9' $outline='none' $border='2px solid rgba(0,0,0,0)' $borderF='2px solid #10b981' $transition='all ease-in-out 0.4s' $padding='0 0 0 3rem' $br='5px'/>
                <IconKey size={20}  />
                {toggle ? 
                <IconCloseEye onClick={handleToggle} /> : <IconOpenEye onClick={handleToggle}/>
                }
            </Div>

            <Div $position='relative' $padding='1rem 0'>
                 <Button  $width='100%' $height='3rem' $outline='none' $border='none' $bg='#000' $color='#fff' $br='25px' $opacity='0.9'>{type=== 'register' ? 'Register' : 'Login'}</Button>
            </Div>

            {type === 'register'&& <Div>
            <Text $ta='center'>Already Member ? <Navlink to='/login' $fw='600' $color='#000'>Sign In </Navlink> </Text>
            </Div>}

            {type === 'login'&& <Div>
            <Text $ta='center'>Don't have an account ? <Navlink to='/register' $fw='600' $color='#000'>Join Us Today  </Navlink> </Text>
            </Div>}
        </Form>

</AnimationWrapper> 
</Div>
  )
}

export default AuthenticationFormItem