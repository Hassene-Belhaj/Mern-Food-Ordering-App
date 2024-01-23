import { combineReducers } from "redux";
import cartSlice from "./Cart/cartSlice";



const rootReducer = combineReducers({
    cart : cartSlice
})


export default rootReducer ;