import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";




const initialState = {
    auth : {} ,
    isLoggedIn : false
}



const authSlice = createSlice({
    name : "authentication" ,
    initialState ,
    reducers : {} ,
    extraReducers : (builder) => {
       builder.addCase(fetchProfile.fulfilled , (state , action) => {
        state.status = 'fulfilled' ;
        state.auth = action.payload ;
        state.isLoggedIn = true
        }),
        builder.addCase(fetchProfile.pending),(state , action) => {
        state.status = 'pending'
        state.isLoggedIn = false
       } 
    }
})


export const fetchProfile = createAsyncThunk('/profile/profile' , async() => {
    const {data } = await axios.get('/profile')
    return data
})

export default authSlice.reducer ;
// export const {getProfile} = authSlice.actions ;
