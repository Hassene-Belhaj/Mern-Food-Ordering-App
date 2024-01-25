import React from 'react'
import { Container, Div, Title3 } from '../Global/Global'
import TabItem from './TabItem'

const Tabs = ({list ,index , activeTab , setActive}) => {



  return (
         <Div $bg='red'>
             <TabItem index={index} title={list} activeTab={activeTab} setActive={setActive} />
         </Div>
  )
}

export default Tabs