import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products : [] ,
}

export const cartSlice = createSlice({
    name : 'cart' ,
    initialState ,
    reducers : {
        addToCart : (state, action) => {
         const itemincart = state.products.find((product)=>product._id === action.payload._id)
         if(itemincart) {
            itemincart.amount++
         } else {
            state.products.push({...action.payload , amount : 1})
         }
        },
        clearCart : (state) => {
            state.products = []
        },

        incrementProductAmount: (state, action) => {
            console.log('increment');
            const item = state.cart.find((product) => product._id === action.payload._id);
            item.quantity++;
        },
        decrementProductAmount: (state, action) => {
                const item = state.cart.find((product) => product._id === action.payload._id);
                if (item.quantity === 1) {
                  item.quantity = 1
                } else {
                  item.quantity--;
                }
        },
        removeProduct: (state, action) => {
            const removeItem = state.cart.filter((product) => product._id !== action.payload._id);
            state.cart = removeItem;
          },
    },
   
})



export const  {addToCart , clearCart , incrementProductAmount , decrementProductAmount , removeProduct} = cartSlice.actions

export default cartSlice.reducer



