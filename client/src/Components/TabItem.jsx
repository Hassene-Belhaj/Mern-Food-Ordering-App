import React from 'react'
import { Div, Title3 } from '../Global/Global'
import { useState } from 'react'

const TabItem = ({title,index,activeTab , setActive}) => {
  const [tab , setTab]  = useState('')

 const handleClickTab = () => {
  setTab(index)
  setActive(index)
 }

console.log(tab);

  return (
    <Div $cursor='pointer' >
        <Title3  $borderB='0.5px solid #fff' $color={activeTab === index ? '#10b981' : '#fff'} $transition='0.3s all ease-in-out' $fw='500' onClick={handleClickTab}>
          {title}
        </Title3> 
    </Div>
  )
}

export default TabItem