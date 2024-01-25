import React, { useEffect } from 'react'
import { useDispatch  , useSelector} from 'react-redux'
import { Container, Div, Image, Title3 } from '../../Global/Global'
import { fetchProducts } from '../../Redux/Products/productsSlice'
import Spinner from '../../utils/Spinner'
import ProdcutDetailsCard from '../../Components/ProdcutDetailsCard'
import Tabs from '../../Components/Tabs'
import { useState } from 'react'

const index = () => {
   const [activeTab , setActiveTab] = useState(0)

  const dispatch = useDispatch()
  const products = useSelector(state=>state.products)

  useEffect(()=>{
   dispatch(fetchProducts())
  },[])

  


  console.log(products?.products[1]?.name) 
  return (
    <Container $padding='2rem 0' $bg='#000' $color='#fff' $width='100vw'> 
    
         <Div  $display='flex' $jc='center'  $gap='2rem' $width='auto' $height='40px'  $margin='1rem auto 4rem auto' $tt='uppercase'  >
              {products.products.map((productCategory , i) => {
                return (
                  <Tabs key={i} index={i} list={productCategory.name.name}
                   activeTab={activeTab} 
                   setActive={setActiveTab} />
                )
              })}

         </Div>

          <Tabs />
      {products.status === 'pending' ? <Spinner /> : 
      <Div $height='100%'> 
        {products.products[0] && products.products[activeTab].products.map((item , index) => {
          return (
            <Div key={index} $gap='2rem'>
              <ProdcutDetailsCard  product={item}/>
            </Div>
          )
        }) }

      </Div>
      
      
      }

      
    </Container>
  )
}

export default index