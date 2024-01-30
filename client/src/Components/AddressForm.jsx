import React from 'react'
import { Button, Div, Form, Input, Label, Span, Title3 } from '../Global/Global'
import { GrChapterNext } from "react-icons/gr";





const AddressForm = ({activeTab , setActiveTab}) => {
  
    const nextbutton = (e) => {
        e.preventDefault()
        setActiveTab(1)
    } 


  return (
    <Form $display='flex' $fd='column' $gap='2rem' >

       <Div $display='flex' $fd='column' $width='80%' $margin='auto' $gap='1rem' >
             <Label $fw='600'>Street Address</Label>
            <Div $width='100%' $br='5px' >
                <Input  placeholder='Street Address' $padding='.5rem'  $width='100%' $height='2rem' $border='2px solid rgba(0,0,0,0.1)' $borderF='2px solid #10b981' $outline='none'  $transition='0.4s all ease-in-out' $br='5px'/> 
            </Div> 
        </Div>  

        <Div $display='flex' $width='80%' $margin='auto' $gap='.5rem' >
            
            <Div $flex='1' $display='flex' $fd='column' $gap='1rem' >
                <Label $fw='600'>City</Label>
             <Div  $width='100%' $br='5px'>
                  <Input placeholder='city' $padding='.5rem' $width='100%' $height='2rem' $border='2px solid rgba(0,0,0,0.1)' $borderF='2px solid #10b981' $outline='none'  $transition='0.4s all ease-in-out' $br='5px' /> 
            </Div>   
        </Div>

            <Div  $flex='1' $display='flex' $fd='column' $gap='1rem' >
              <Label $fw='600'>State</Label>
             <Div  $width='100%' $br='5px'>
             <Input placeholder='State' $padding='.5rem' $width='100%' $height='2rem' $border='2px solid rgba(0,0,0,0.1)' $borderF='2px solid #10b981' $outline='none'  $transition='0.4s all ease-in-out' $br='5px' /> 
            </Div> 
            </Div>
        </Div>  

        <Div $display='flex' $width='80%' $margin='auto' $gap='.5rem' >
            <Div  $flex='1' $display='flex' $fd='column' $gap='1rem' >
                <Label $fw='600'>Country</Label>
                <Div $width='100%' $br='5px' >
                   <Input placeholder='country' $padding='.5rem' $width='100%' $height='2rem' $border='2px solid rgba(0,0,0,0.1)' $borderF='2px solid #10b981' $outline='none'  $transition='0.4s all ease-in-out' $br='5px' /> 
                </Div>
        </Div>

            <Div  $flex='1' $display='flex' $fd='column' $gap='1rem' >
            
               <Label $fw='600'>Postal Code</Label>
              <Div $width='100%' $br='5px'>
              <Input placeholder='Postal Code' $padding='.5rem' $width='100%' $height='2rem' $border='2px solid rgba(0,0,0,0.1)' $borderF='2px solid #10b981' $outline='none'  $transition='0.4s all ease-in-out'  $br='5px'/> 
              </Div>
            </Div>

        </Div>  

        <Div $width='80%' $display='flex' $jc='end' $margin='auto' $padding='2rem 0 0 0'>
            <Button onClick={nextbutton} $width='10rem' $height='3rem' $bg='#10b981' $color='#fff' $display='flex' $jc='center' $ai='center' $gap='.5rem' $outline='none' $border='none' $br='25px' $fw='600' >
                    Next
                <GrChapterNext color='#fff' size={20} />
            </Button>
        </Div>
 
    </Form>
  )
}

export default AddressForm