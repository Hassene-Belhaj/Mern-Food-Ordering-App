import { Div, Section } from '../Global/Global'
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import ProductCard from './ProductCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch} from 'react-redux'
import { addToCart } from '../Redux/Cart/cartSlice'
import Spinner from '../utils/Spinner'
import toast from 'react-hot-toast'


const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1240 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1240, min: 1040 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1040, min: 660 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 660, min: 0 },
      items: 1
    }
  };


const structure = [
   {_id : '' , name : '' , adjective : '' , description : '' , category : {name : ''} , imageUrl : '' , price : '' , updatedAt : ''}
]
 


const Products = () => {
    const [products , setProducts] = useState(structure)
    const dispatch = useDispatch()



    const addProduct = (product) => {
        toast.dismiss()
        dispatch(addToCart(product))
    }


    const FecthProducts = async() => {
        try {
            const {data} = await axios.get('/products')
            // console.log(data.resp);
            setProducts(data.resp)
        } catch (error) {
            console.log(error);
        }
    }


useEffect(()=>{
    FecthProducts()
},[])    

    return ( 
        <Section $bg='#000' $color='#fff' $margin='0 0 4rem 0'>
 
           {products?.length > 1 ?     
            <Div $width='80%' $margin='auto'>
            
        <Carousel responsive={responsive}>
            {products.map((product , i)=> {
                return (
                    <Div $display='flex' $jc='center' $ai='start' $margin='auto'  $width='auto' $height='500px' key={i}> 
                          <ProductCard  product={product} addProduct={addProduct} />
                     </Div>
               )
            })}
        </Carousel>
            </Div>
            :
            <Spinner/>
            }
   
        </Section>
    )
}






export default Products ;



