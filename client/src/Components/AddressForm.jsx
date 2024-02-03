import React from 'react'
import { Button, Div, Form, Input, Label, Span, Text, Title3 } from '../Global/Global'
import { GrChapterNext } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { addAdress } from '../Redux/Address/AddressSlice';





const AddressForm = ({activeTab , setActiveTab,index}) => {

    const address = useSelector(state=>state.address)
    const dispatch = useDispatch()
    console.log(address);
  
    const nextbutton = (e) => {
        e.preventDefault()
    } 
    
    
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
    <Form $display='flex' $fd='column' $gap='2rem'  onSubmit={handleSubmit} >
        <Div $display='flex' $jc='center' $margin='auto'>
              <Text $fw='600' $width='80%' $ta='center'>For your transaction success, please fill the information carefully.</Text>
        </Div>

       <Div $display='flex' $fd='column' $width='80%' $margin='auto' $gap='1rem' >
            <Div $width='100%' $br='5px' >
                <Input name='street_address' type='text' placeholder='Street Address' autoComplete='off' $padding='.5rem'  $width='100%' $height='2.5rem' $border='2px solid rgba(0,0,0,0.0)' $bg='#f3f5f9' $borderF='2px solid #10b981' $outline='none'  $transition='0.4s all ease-in-out' $br='5px' $colorPH='#000' $fw='500' /> 
            </Div> 
            
        </Div>  

        <Div $display='flex' $width='80%' $margin='auto' $gap='.5rem' >
            
            <Div $flex='1' $display='flex' $fd='column' $gap='1rem' >
             <Div  $width='100%' $br='5px'>
                  <Input name='city' type='text' placeholder='city' autoComplete='off' $padding='.5rem' $width='100%' $height='2.5rem' $border='2px solid rgba(0,0,0,0.0)' $bg='#f3f5f9' $borderF='2px solid #10b981' $outline='none'  $transition='0.4s all ease-in-out' $br='5px' $colorPH='#000' $fw='600' /> 
            </Div> 
             
        </Div>

            <Div  $flex='1' $display='flex' $fd='column' $gap='1rem' >
             <Div  $width='100%' $br='5px'>
             <Input name='state' type='text' placeholder='State' autoComplete='off' $padding='.5rem' $width='100%' $height='2.5rem' $border='2px solid rgba(0,0,0,0.0)' $bg='#f3f5f9' $borderF='2px solid #10b981' $outline='none'  $transition='0.4s all ease-in-out' $br='5px' $colorPH='#000' $fw='500' /> 
            </Div> 
            
            </Div>
        </Div>  

        <Div $display='flex' $width='80%' $margin='auto' $gap='.5rem' >
            <Div  $flex='1' $display='flex' $fd='column' $gap='1rem' >
                <Div $width='100%' $br='5px' >
                   <Input name='country' type='country' placeholder='tunisia' defaultValue='tunisia' autoComplete='off' $padding='.5rem' $width='100%' $height='2.5rem' $border='2px solid rgba(0,0,0,0.0)' $bg='#f3f5f9' $borderF='2px solid #10b981' $outline='none'  $transition='0.4s all ease-in-out' $br='5px' $colorPH='#000' $fw='500' /> 
                </Div>
                
        </Div>

            <Div  $flex='1' $display='flex' $fd='column' $gap='1rem' >
            
              <Div $width='100%' $br='5px'>
              <Input name='postal_code' type='number' placeholder='Postal Code' autoComplete='off' $padding='.5rem' $width='100%' $height='2.5rem' $border='2px solid rgba(0,0,0,0.0)' $bg='#f3f5f9' $borderF='2px solid #10b981' $outline='none'  $transition='0.4s all ease-in-out'  $br='5px' $colorPH='#000' $fw='500'/> 
              </Div>
              
            </Div>

        </Div>  

        <Div $width='80%' $display='flex' $jc='end' $margin='auto' $padding='2rem 0 0 0'>
            <Button $width='10rem' $height='3rem' $bg='#10b981' $color='#fff' $display='flex' $jc='center' $ai='center' $gap='.5rem' $outline='none' $border='none' $br='25px' $colorPH='#000' $fw='500' >
                    Next
                <GrChapterNext color='#fff' size={20} />
            </Button>
        </Div>
 
    </Form>
  )
}

export default AddressForm