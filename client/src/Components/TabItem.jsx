import React from 'react'
import { Div, Title3 } from '../Global/Global'
import { useState } from 'react'

const TabItem = ({title,index,activeTab , setActive , switchColor, tabColor}) => {
  const [tab , setTab]  = useState('')

 const handleClickTab = () => {
  setTab(index)
  setActive(index)
 }

console.log(tab);

  return (
    <Div $cursor='pointer' $borderB={activeTab === index ? `solid .5px ${switchColor} ` : null} $padding='0 0 8px 0'>
        <Title3  $color={activeTab === index ? switchColor : tabColor ? tabColor : '#fff'} $transition='0.3s all ease-in-out' $fs='1rem' $fw='600' onClick={handleClickTab}>
          {title}
        </Title3> 
    </Div>
  )
}

export default TabItem