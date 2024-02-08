import React from 'react'
import styled, {keyframes } from 'styled-components'
import { ImSpoonKnife } from "react-icons/im";
import { Div, Text, Title3 } from '../Global/Global';



const Container = styled.div`
padding: ${({$padding})=>$padding ? $padding : '5rem'};
width: ${({$width})=>$width};
`

const Logo = styled(ImSpoonKnife)`
position: absolute;
color: #fff;
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
width: ${({$spinnerWidth})=>$spinnerWidth ? $spinnerWidth : '60px'};
height: ${({$spinnerHeight})=>$spinnerHeight ? $spinnerHeight : '60px'};
border-top: 3px solid  #10b981;
border-right: 3px solid  #10b981;
border-left: 3px solid  #10b981;
border-bottom: 3px solid rgba(0,0,0,0);
background-color: transparent;
border-radius: 50%;
`



const Spinner = ({padding , spinnerWidth , spinnerHeight}) => {
  return (
    <Container $padding={padding} >
          <Div $position='relative' $display='flex'  $jc='center' $ai='center'> 
           <SpinnerLoading $spinnerWidth={spinnerWidth} $spinnerHeight={spinnerHeight}> </SpinnerLoading>
          {/* <Logo /> */}
          </Div>

          {/* <Text  $fw='500' $fs='.8rem' $color='#fff' $ta='center' $padding='10px 0' >Please wait</Text> */}
    </Container>
  )
}

export default Spinner