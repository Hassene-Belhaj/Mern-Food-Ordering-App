import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    userInfo : {} ,
    status : 'idle' ,
    error : null ,
}



const User_Info =  createSlice({
    name : 'userInfo' ,
    initialState ,
    reducers : {} ,
    extraReducers : (builder) => {
        builder.addCase(FetchUserInfo.fulfilled , (state , action) => {
               state.status = 'fulfilled' 
               state.userInfo = {...action.payload}
        }) ;
        builder.addCase(FetchUserInfo.pending , (state , action) => {
            state.status = 'loading' ;
            state.userInfo = {}
        }) ; 
        builder.addCase(FetchUserInfo.rejected, (state, action) => {
            state.status = "failed";
            state.error = true;
          });
    }

 })



 export const FetchUserInfo = createAsyncThunk('/user/fetchUserInfo/' , async () => {
        const {data} = await axios.get('/user_info')
        return data.resp

   
 })

export const {getInfo} = User_Info.actions ;
export default User_Info.reducer ;

