import React, { useRef } from 'react'
import { Button, Div, Form, Input } from '../Global/Global'
import { IconCloseEye, IconKey, IconOpenEye } from './AuthenticationFormItem'
import { useState } from 'react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Spinner from '../utils/Spinner';




let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password


const ChangePassword = () => {

     const refCurrentPwd = useRef(null)
     const refNewPwd = useRef(null)
    const [toggle , setToggle] = useState(false)
    const [toggle2 , setToggle2] = useState(false)

    const handleToggle = (e) => { 
        setToggle(!toggle)
    }

    const handleToggle2 = (e) => { 
      setToggle2(!toggle2)
  }

  
    const handleUpdatePassword = async(e) => {
      e.preventDefault()
      let formdata = new FormData(e.target)
      let Data = {} ;
      Data = Object.fromEntries(formdata.entries()) ;
       const {currentPassword , newPassword} = Data
       if(!passwordRegex.test(currentPassword) || !passwordRegex.test(newPassword)) {
       return toast.error('password shoud be 6 to 9 characters long with a numeric , 1 lowercase and 1 uppercase letters')
    }

      try {
        const {data} = await axios.post('/change_password' , {currentPassword , newPassword})
        console.log(data);
        if(data.success === true) {
          toast.success(data.msg) ;
          refCurrentPwd.current.value = '' ;
          refNewPwd.current.value = '' ;
        }
    
      } catch (error) {
        toast.error(error.response.data.msg)
      }
     
   }

  
  return (
  <Form $display='flex' $fd='column' $width='100%'  $gap='2rem' onSubmit={handleUpdatePassword} >
    <Toaster
      position='top-center'
      containerStyle={{
      position: 'absolute',
      top : '80px' ,
      right : '0',
      display : 'flex' ,
      justifyContent:'center'
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
        duration : 1500 ,
        iconTheme: {
          primary: '#14b8a6',
        },
      },
      error : {
        duration : 1500 ,
        iconTheme: {
          primary: '#e11d48',
        },
      }
    }}
    />
    <Div $position='relative' $width='100%' $height='2.5rem' $margin='auto' $br='5px'>
            <Input ref={refCurrentPwd} $fw='600' $colorPH='#000' name='currentPassword' type={toggle ? 'text' : 'password'}  placeholder='Current Password' $width='100%' $height='100%' $bg='#f3f5f9' $outline='none' $border='2px solid rgba(0,0,0,0)' $borderF='2px solid #10b981' $transition='all ease-in-out 0.4s' $padding='0 0 0 3rem' $br='5px'/>
            <IconKey size={20}  />
            {toggle ? 
            <IconCloseEye onClick={handleToggle} /> : <IconOpenEye onClick={handleToggle}/>
        }
    </Div>
    <Div $position='relative' $width='100%' $height='2.5rem' $margin='auto' $br='5px'>
            <Input ref={refNewPwd} $fw='600' $colorPH='#000' name='newPassword' type={toggle ? 'text' : 'password'}  placeholder='New Password' $width='100%' $height='100%' $bg='#f3f5f9' $outline='none' $border='2px solid rgba(0,0,0,0)' $borderF='2px solid #10b981' $transition='all ease-in-out 0.4s' $padding='0 0 0 3rem' $br='5px'/>
            <IconKey size={20}  />
            {toggle2 ? 
            <IconCloseEye onClick={handleToggle2} /> : <IconOpenEye onClick={handleToggle2}/>
        }
    </Div>
    <Div $position='relative' $padding='1rem 0'>
     <Button  $width='100%' $height='3rem' $outline='none' $border='none' $bg='#000' $color='#fff' $br='25px' $opacity='0.9'>Change Password</Button>
</Div>

</Form>

  )
}

export default ChangePassword