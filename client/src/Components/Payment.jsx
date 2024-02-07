import React from 'react'
import { Div, Label, Section } from '../Global/Global'
import styled from 'styled-components'


const Input = styled.input`

`

const Payment = () => {
  return (
    <Section $maxwidth='400px' $margin='auto'>
        <Div $display='flex' $fd='column' $jc='center' $margin='auto' $gap='.5rem'>
                {['Credit Card' , 'Cash On Delivery'].map((item,i) => {
                    return (
                        <Div $display='flex' $gap='.5rem' key={i}>
                            <Input type='radio' disabled={item === 'Credit Card'} />
                            <Label>{item}</Label>
                        </Div>
                    )
                })}
           
            
        </Div>
    </Section>
  )
}

export default Payment