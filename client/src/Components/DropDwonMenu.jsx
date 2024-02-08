import React from 'react'
import { Div, Title3 } from '../Global/Global'
import AnimationWrapper from '../utils/animationWrapper'

const DropDwonMenu = ({dropDown}) => {
  return (
    <AnimationWrapper initial={{opacity : 0}} animate={{opacity : 1}} exit={{opacity : 0}}  transition={{duration : 0.5}} >
        <Div  $position='absolute' $zindex='10' $top={dropDown ? '80px' : '-30rem' } $transition='all ease-in-out 0.5s' $right='0rem' $bg='#fff' $color='#000' $width='350px' $height='20rem' $br='5px' $boxShadow='rgba(0,0,0,0.2) 0px 2px 5px -1px, rgba(0,0,0, 0.2) 0px 1px 3px -1px'>
        <Title3>dropDown</Title3>
        </Div>
    // </AnimationWrapper>
  )
}

export default DropDwonMenu