import React from 'react'
import { Container, Div, Title3 } from '../Global/Global'
import TabItem from './TabItem'

const Tabs = ({list ,index , activeTab , setActive , switchColor , tabColor}) => {



  return (
         <Div>
             <TabItem index={index} title={list} activeTab={activeTab} setActive={setActive} switchColor={switchColor} tabColor={tabColor} />
         </Div>
  )
}

export default Tabs