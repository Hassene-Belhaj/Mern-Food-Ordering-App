import React from 'react'
import { Button, Div, Nav, Navlink, Text, Title2, Title3, Title4, Title5 } from '../Global/Global'
import { AnimatePresence ,  motion} from 'framer-motion'
import styled from 'styled-components'

const NavLink = styled(Navlink)`
text-decoration: none;
color:#000;

`


const DropDown = styled(motion.div)`
position: absolute;
z-index: 10;
top: ${({$dropDown})=>$dropDown ? '80px' : '-30rem'};
right: 0;
background-color: #fff;
box-shadow:rgba(0,0,0,0.2) 0px 2px 5px 0px, rgba(0,0,0,0.2) 0px 1px 3px 0px ;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
width: 250px;
height: auto;
`


const DropDwonMenu = ({dropDown , userInfo , handleLogOut}) => {
  const {_id , username , email , profile_img} = userInfo


  return (

      <AnimatePresence >
         <DropDown
         $dropDown={dropDown}
         key={dropDown}
         initial={{opacity : 0 , y : '-100%'}}
         animate={{opacity : 1 , y : '0'}}
         transition={{duration : 0.5 }}
         exit={{opacity : 0 ,  y : '-100%'}}
         >
         <Div $display='flex' $fd='column' $ai='center' $jc='center'  $color='#000' >
            {['Profile' ,'Dashbord' , 'Settings' ].map((item , i) =>{
              return (
                  <Div key={i} $width='100%' $height='3rem' $display='flex' $jc='center' $ai='center' $bgh='#e2e8f0' $transition='all ease-in-out 0.3s' >
                    <NavLink to={item === 'Settings' ? 'settings/edit_profile' : item.toLowerCase() }>{item}</NavLink>
                  </Div>

          
              )
            })}
            <Div onClick={handleLogOut}  $width='100%' $height='3rem' $display='flex' $fd='column' $jc='center' $ai='center' $bgh='#e2e8f0' $transition='all ease-in-out 0.3s' $borderB='solid 0.5px rgba(0,0,0,0.3)' >
          <NavLink>Sign Out</NavLink>
         
 
          </Div>
          <Div  $width='100%' $height='3rem' $display='flex' $fd='column' $jc='center' $ai='center' $bgh='#e2e8f0' $transition='all ease-in-out 0.3s' $borderBottomLeftRadius='15px' $borderBottomRightRadius='15px' $cursor='pointer'>
          <Title3 $padding='0.5rem 0' $fs='0.8rem'>{email}</Title3>
         
 
          </Div>



 
          </Div>

    
         </DropDown>
      </AnimatePresence>
 
      
  )
}

export default DropDwonMenu