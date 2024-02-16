import React from 'react'
import { Toaster } from 'react-hot-toast'

const Toast = () => {
  return (
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
  )
}

export default Toast