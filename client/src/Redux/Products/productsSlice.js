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
        builder.addCase(fetchProducts.fulfilled , ( state , action ) => {
            state.status = 'fullfill'
            // state.products.push(action.payload)
            state.products= [...action.payload]
        });
        builder.addCase(fetchProducts.pending , (state , action) => {
            state.status= 'pending'
        })
    }
})


export const fetchProducts = createAsyncThunk('/products/fetchProducts' , async() => {
    const { data } =  await axios.get('/products/products_by_category')
    return data.resp;
})

export const {getProducts} = productSlice.actions ; 

export default productSlice.reducer ; 


// export const selectAllProducts = state => state.products ; or useSelector(state=>state.products)



