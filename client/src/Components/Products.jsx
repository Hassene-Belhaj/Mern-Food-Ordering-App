import { Div, Section } from '../Global/Global'
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import ProductCard from './ProductCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const stracture = [
   {_id : '' , name : '' , adjective : '' , description : '' , category : {name : ''} , imageUrl : '' , price : '' , updatedAt : ''}
]
 

const Products = () => {
    const [products , setProducts] = useState(stracture)

    console.log(products);

    const FecthProducts = async() => {
        try {
            const {data} = await axios.get('/products')
            console.log(data.resp);
            setProducts(data.resp)
        } catch (error) {
            console.log(error);
        }
    }


useEffect(()=>{
    FecthProducts()
},[])    

    return (
    <Section $margin='auto' $padding='4rem 0' >
            <Carousel responsive={responsive}
              infinite={true}
     

            >
            {products.length > 0 && products.map((product , i)=> {
                return (
                    <Div $display='flex' $jc='center' $margin='auto' key={i}>
                        <ProductCard  product={product} />
                    </Div>
                )
            })}

            </Carousel>
        </Section>
    )
}






export default Products ;



