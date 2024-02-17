import React from 'react'
import { Button, Div, Form, Input, Section, Text, Title3 } from '../Global/Global'
import { GrChapterNext } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { addAdress } from '../Redux/Address/AddressSlice';
import styled from 'styled-components';


const Label = styled.label`
font-size: 1rem;
font-weight: 600;
`
const Span = styled.span`
color: red;
font-weight: 700;
`


const AddressForm = ({activeTab , setActiveTab,index,_id,email,username}) => {

    const address = useSelector(state=>state.address)
    const dispatch = useDispatch()
    console.log(address);
  
    const nextbutton = (e) => {
        e.preventDefault()
    } 
    

    // console.log(new Date(Date.now()+1000*60*60*24*3).toString().slice(0,15));

    
    const handleSubmit = (e) => {
        e.preventDefault()
        let formdata = new FormData(e.target)
        let data = {} ;
        data = Object.fromEntries(formdata.entries()) ;
        dispatch(addAdress(data))
        console.log(data);
        setActiveTab(index+1)
    } 

  return (
    <Form $display='flex' $fd='column' $gap='1rem'  onSubmit={handleSubmit} >

        <Div $display='flex' $jc='center' $margin='auto 0 2rem  auto'>
              <Text $fw='600' $width='80%' $ta='center'>For your transaction success, please fill the information carefully.</Text>
        </Div>
        <Div $display='flex' $width='80%' $margin='auto' $gap='.5rem' >   

            <Div $flex='1' $display='flex' $fd='column' $gap='1rem' >
                <Label>Email <Span>*</Span> </Label>     
             <Div  $width='100%' $br='5px'>
                  <Input disabled name='email' type='text' placeholder={email} autoComplete='off' $padding='.5rem' $width='100%' $height='2.5rem' $border='2px solid rgba(0,0,0,0.0)' $bg='#f3f5f9' $borderF='2px solid #10b981' $outline='none'  $transition='0.4s all ease-in-out' $br='5px' $colorPH='rgba(0,0,0,0.5)' $fw='600' /> 
            </Div>        
           </Div>


        <Div  $flex='1' $display='flex' $fd='column' $gap='1rem' >
            <Label>Username <Span>*</Span> </Label>
             <Div  $width='100%' $br='5px'>
                <Input disabled name='username' type='text' placeholder={username} autoComplete='off' $padding='.5rem' $width='100%' $height='2.5rem' $border='2px solid rgba(0,0,0,0.0)' $bg='#f3f5f9' $borderF='2px solid #10b981' $outline='none'  $transition='0.4s all ease-in-out' $br='5px' $colorPH='rgba(0,0,0,0.5)' $fw='500' /> 
            </Div>   
            </Div>
        </Div>  

       <Div $display='flex' $fd='column' $width='80%' $margin='auto' $gap='1rem' >
          <Label>Street Address</Label>
            <Div $width='100%' $br='5px' >
                <Input name='street_address' type='text' placeholder='Street Address' autoComplete='off' $padding='.5rem'  $width='100%' $height='2.5rem' $border='2px solid rgba(0,0,0,0.0)' $bg='#f3f5f9' $borderF='2px solid #10b981' $outline='none'  $transition='0.4s all ease-in-out' $br='5px' $colorPH='#000' $fw='500' /> 
            </Div> 
            
        </Div>  

        <Div $display='flex' $width='80%' $margin='auto' $gap='.5rem' >
            <Div $flex='1' $display='flex' $fd='column' $gap='1rem' >
             <Label>City</Label>
             <Div  $width='100%' $br='5px'>
                  <Input name='city' type='text' placeholder='city' autoComplete='off' $padding='.5rem' $width='100%' $height='2.5rem' $border='2px solid rgba(0,0,0,0.0)' $bg='#f3f5f9' $borderF='2px solid #10b981' $outline='none'  $transition='0.4s all ease-in-out' $br='5px' $colorPH='#000' $fw='600' /> 
            </Div> 
             
        </Div>

            <Div  $flex='1' $display='flex' $fd='column' $gap='1rem' >
            <Label>State</Label>

             <Div  $width='100%' $br='5px'>
             <Input name='state' type='text' placeholder='State' autoComplete='off' $padding='.5rem' $width='100%' $height='2.5rem' $border='2px solid rgba(0,0,0,0.0)' $bg='#f3f5f9' $borderF='2px solid #10b981' $outline='none'  $transition='0.4s all ease-in-out' $br='5px' $colorPH='#000' $fw='500' /> 
            </Div> 
            
            </Div>
        </Div>  

        <Div $display='flex' $width='80%' $margin='auto' $gap='.5rem' >
            <Div  $flex='1' $display='flex' $fd='column' $gap='1rem' >
            <Label>Country <Span>*</Span> </Label>
                <Div $width='100%' $br='5px' >
                   <Input disabled name='country' type='country' placeholder='tunisia' defaultValue='tunisia' autoComplete='off' $padding='.5rem' $width='100%' $height='2.5rem' $border='2px solid rgba(0,0,0,0.0)' $bg='#f3f5f9' $borderF='2px solid #10b981' $outline='none'  $transition='0.4s all ease-in-out' $br='5px' $colorPH='#000' $fw='500' /> 
                </Div>
                
        </Div>

            <Div  $flex='1' $display='flex' $fd='column' $gap='1rem' >
              <Label>Postal Code</Label>
              <Div $width='100%' $br='5px'>
              <Input name='postal_code' type='text' placeholder='2000' autoComplete='off' $padding='.5rem' $width='100%' $height='2.5rem' $border='2px solid rgba(0,0,0,0.0)' $bg='#f3f5f9' $borderF='2px solid #10b981' $outline='none'  $transition='0.4s all ease-in-out'  $br='5px' $colorPH='#000' $fw='500'/> 
              </Div>
              
            </Div>

        </Div>  

        <Div $width='80%' $display='flex' $jc='end' $margin='auto' $padding='1rem 0 0 0'>
            <Button $width='10rem' $height='3rem' $bg='#10b981' $color='#fff' $display='flex' $jc='center' $ai='center' $gap='.5rem' $outline='none' $border='none' $br='25px' $colorPH='#000' $fw='500' >
                    Next
                <GrChapterNext color='#fff' size={20} />
            </Button>
        </Div>
    </Form>
  )
}

export default AddressForm