import React, { useEffect } from 'react'
import { useDispatch  , useSelector} from 'react-redux'
import { Container, Div, Image, Title3 } from '../../Global/Global'
import { fetchProducts } from '../../Redux/Products/productsSlice'
import Spinner from '../../utils/Spinner'
import ProdcutDetailsCard from '../../Components/ProdcutDetailsCard'

const index = () => {

  const dispatch = useDispatch()
  const products = useSelector(state=>state.products)

  useEffect(()=>{
   dispatch(fetchProducts())
  },[])
  
  console.log(products.products[0]) 
  return (
    <Container $padding='4rem 0' $bg='#000' $color='#fff' $height='100vh'> 
      {products.status === 'pending' ? <><Spinner /></> : 
      <Div $display='flex' $jc='center' $ai='center'>
        {products.products[0] && products.products[1].products.map((item) => {
          return (
            <Div $gap='2rem'>
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