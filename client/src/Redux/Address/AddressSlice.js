import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    address : [] ,
}


const AddressSlice = createSlice({
    name : 'address' ,
    initialState ,
    reducers : {
        addAdress : (state , action) => {
            state.address.push(action.payload)
        } ,
        clearAdress : (state , action) => {
            return {address : [] }
        }

    }
})



export default AddressSlice.reducer ;
export const  {addAdress , clearAdress} = AddressSlice.actions ;