import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : [] ,
}



const cartSlice = createSlice({
    name : 'cart' ,
    initialState ,
    reducers : {
        addToCart : (state , action) => {
            const itemincart = state.cart.find((product)=>product._id === action.payload._id) ;
            if(itemincart) {
                 itemincart.amount++ ;
            } else {
                state.cart.push({...action.payload , amount : 1}) ;
            } 
        },
        incrementProductAmount : (state , action) => {
            const itemamount = state.cart.find((product) => product._id === action.payload._id) ;
            if(itemamount) {
                itemamount.amount++;
            }
        },
        decrementProductAmount : (state ,action) => {
            const itemamount = state.cart.find((product)=>product._id === action.payload._id) ;
            if(itemamount.amount === 1) {
                itemamount.amount = 1 ;
      
            }else {
                itemamount.amount--;
            } 
        },
        removeItem : (state,action) => {
            const itemincart = state.cart.filter((product)=>product._id !== action.payload._id) ;
            state.cart = itemincart ;
        },
        clear : (state,action) => {
            return state.cart = [] ;
        }


    }

})




export const {addToCart , incrementProductAmount , decrementProductAmount , removeItem , clear} = cartSlice.actions ;
export default cartSlice.reducer ;





