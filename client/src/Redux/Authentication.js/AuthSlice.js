import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";




const initialState = {
    auth : {} ,
    isLoggedIn : false,
    status : 'idle',
    error :null 
}



const authSlice = createSlice({
    name : "authentication" ,
    initialState ,
    reducers : {} ,
    extraReducers : (builder) => {
       builder.addCase(fetchProfile.fulfilled , (state , action) => {
        state.status = 'fulfilled' ;
        state.auth = action.payload ;
        if(state.auth !== undefined) { // if not cookie
            state.isLoggedIn = true 
        } 
       }) ;
       builder.addCase(fetchProfile.pending , (state , action)=> {
        state.status = 'loading' ;
        state.isLoggedIn = false ;
       })
       builder.addCase(fetchProfile.rejected(), (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
    
      
    }
})


export const fetchProfile = createAsyncThunk('/profile/profile' , async() => {
        const {data } = await axios.get('/profile')
        return data ;
})


export default authSlice.reducer ;
