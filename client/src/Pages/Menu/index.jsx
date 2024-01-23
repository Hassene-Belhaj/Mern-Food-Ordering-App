import React, { useEffect } from 'react'
import { useDispatch  , useSelector} from 'react-redux'
import { fetchProducts  , selectAllProducts} from '../../Redux/Menu/menuSlice'

const index = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)
  useEffect(()=>{
   dispatch(fetchProducts())

  },[])


  return (
    <div>Menu</div>
  )
}

export default index