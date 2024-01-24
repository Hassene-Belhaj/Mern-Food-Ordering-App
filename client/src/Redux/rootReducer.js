import { combineReducers } from "redux";
import cartSlice from "./Cart/cartSlice";
import productsSlice from "./Products/productsSlice";



const rootReducer = combineReducers({
    cart : cartSlice ,
    products : productsSlice ,

})


export default rootReducer;