import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    products : []
}

export const cartSlice = createSlice({
    name : 'cart' ,
    initialState ,
    reducers : {
        addToCart : (state, action) => {
           return  { products : [...state.products , {...action.payload , amount : 1}]}
        },
        clearCart : (state) => {
            return { products : [] }
        },
        incrementProductAmount : (state,action) => {
            return {products : state.products.map((p)=>p.id === action.payload.id ? {...products , amount : products.amount + 1} : product)}
        },
        decrementProductAmount : (state,action) => {
            return {products : state.products.map((p)=>p.id === action.payload.id ? {...products , amount : products.amount + 1} : product)}
        }
    }
})



export const cartProducts = state  => state.cart.products ;
export const  {addToCart , clearCart , incrementProductAmount , decrementProductAmount} = cartSlice.actions
export default cartSlice.reducer