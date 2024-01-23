import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    products  : [] ,
    error    : null , 
    status : 'idle'
}


export const productSlice= createSlice({
    name : 'products' , 
    initialState , 
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchProducts.fulfilled , (state , action) => {
            state.products.push(action.payload)
        })
    }
})

export const {getProducts} = productSlice.actions ; 
export default productSlice.reducer ; 

export const fetchProducts = createAsyncThunk('/products/fetchProducts' , async() => {
   const {data} =  await axios.get('/products/products_by_category')
   return data.resp ;
})


export const selectAllProducts = state => state.products