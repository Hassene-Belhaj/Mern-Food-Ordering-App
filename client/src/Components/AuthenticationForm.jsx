import React from 'react'
import {Container } from '../Global/Global'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router';
import AuthenticationFormItem from './AuthenticationFormItem';
import { useDispatch, useSelector } from 'react-redux';




const AuthenticationForm = ({type}) => {
  
  const authentication = useSelector(state=>state.authentication)
  const dispatch = useDispatch()
  // console.log(authentication);


     
   const navigate = useNavigate()

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password


    const Axios_APi_Call = async(serverRoute,data) => {
        try {
            const resp= await axios.post(serverRoute , data)
            if(resp.status === 200) {
                toast.success('Login Successfully Welcome')
                setTimeout(() => {
                   navigate('/')
                }, 1500)
                
            }   
            if(resp.status === 201) {
                toast.success('Register Successfully Welcome')
                setTimeout(() => { 
                  navigate('/login') 
                }, 1500)
            }
            
        } catch (error) {
            // console.log(typeof error.response.status);
            if(error.response.status.toString().startsWith(4)) {
                toast.error(error.response.data.msg)
            }
        }
    }


   const handleSubmitAuth = (e) => {
    e.preventDefault()
    let serverRoute = type === 'register' ? '/register' : '/login' ;
    let formdata = new FormData(e.target)
    let data = {} ;
    data = Object.fromEntries(formdata.entries()) ;

    const {username , email ,password} = data ;

    if(username){
        if(username.length < 3 ) return  toast.error('Username must be at least 3 letters long')
    }

    if(!email.length ) return  toast.error('Enter email')
    if(!emailRegex.test(email)) return  toast.error('Invalid Email')
    if(!passwordRegex.test(password)) return toast.error('Password shoud be 6 to 9 characters long with a numeric , 1 lowercase and 1 uppercase letters')

    Axios_APi_Call(serverRoute , data)

   }

 
    const Height = `calc(100vh - 80px)`


  return (
    <Container $width='100vw' $height={Height} $bg='#fff' $color='#000'  >  
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
            <AuthenticationFormItem handleSubmitAuth={handleSubmitAuth} type={type}/>
    </Container>
  )
}

export default AuthenticationForm