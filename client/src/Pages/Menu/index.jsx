import React, { useEffect } from 'react'
import { useDispatch  , useSelector} from 'react-redux'
import { Container, Div, Image, Title3 } from '../../Global/Global'
import { fetchProducts } from '../../Redux/Products/productsSlice'
import Spinner from '../../utils/Spinner'
import MenuProdcutDetailsCard from '../../Components/MenuProdcutDetailsCard'
import Tabs from '../../Components/Tabs'
import { useState } from 'react'
import styled from 'styled-components'



const Grid = styled.div`
width : 90%;
display: grid;
grid-template-columns: repeat(auto-fill,minmax(400px,1fr));
justify-content: center;
align-items: center;
margin: auto;
gap : 4rem;
`


const index = () => {
   const [activeTab , setActiveTab] = useState(0)

  const dispatch = useDispatch()
  const products = useSelector(state=>state.products)

  useEffect(()=>{
   dispatch(fetchProducts())
  },[])



  if(!products.products[0]) return <Container $width='100vw' $height='100vh' $margin='auto' $padding='6rem 0 0 0' $bg='#000'><Spinner padding={'10rem 0'} />   </Container>

  else {

    return (
      <Container $width='100vw' $height='100%' $margin='auto' $padding='6rem 0 0 0' $bg='#000'> 
       
          <Div  $display='flex' $jc='center'  $gap='1rem'  $height='40px' $padding='0 0 2rem 0'  $margin='0rem 0 8rem auto' $tt='uppercase'  >
              {products.products.map((productCategory , i) => {
                return (
                  <Tabs
                  key={i} index={i} list={productCategory.name.name}
                  activeTab={activeTab} 
                  setActive={setActiveTab} 
                  switchColor='#10b981' 
                  />
                  )
                })}

         </Div>

      {!products.status === 'fulfilled' ? <Spinner /> : 
      <Grid> 
          {products.products[activeTab] && products.products[activeTab].products.map((item , index) => {
            return (
              <Div key={index} $gap='2rem'>
                <MenuProdcutDetailsCard  product={item}/>
              </Div>
            )
          }) 
          }
      </Grid>
      
      
      } 
    
    

      
    </Container>
  )
}
}

export default index