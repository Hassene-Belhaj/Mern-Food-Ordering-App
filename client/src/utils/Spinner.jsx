import React from 'react'
import styled, {keyframes } from 'styled-components'
import { ImSpoonKnife } from "react-icons/im";
import { Div, Text, Title3 } from '../Global/Global';



const Container = styled.div`

padding: ${({$padding})=>$padding ? $padding : '5rem'};
`

const Logo = styled(ImSpoonKnife)`
position: absolute;
`

const rotate360 = keyframes`
from {
   transform: rotate(0deg);
}

to {
   transform:rotate(360deg);
}
`


const SpinnerLoading = styled.div`
animation : ${rotate360} 1s linear infinite;
width: 40px;
height: 40px;
border-top: 3px solid  rgba(0,0,0,1);
border-right: 3px solid  rgba(0,0,0,1);
border-left: 3px solid  rgba(0,0,0,1);
border-bottom: 3px solid  rgba(0,0,0,0.2);
background-color: transparent;
border-radius: 50%;
`



const Spinner = () => {
  return (
    <Container>
          <Div $position='relative' $display='flex'  $jc='center' $ai='center'> 
           <SpinnerLoading>
          </SpinnerLoading>
          <Logo />
          </Div>

          <Text  $fw='500' $fs='1rem' $ta='center' $padding='10px 0'>Please wait</Text>
    </Container>
  )
}

export default Spinner