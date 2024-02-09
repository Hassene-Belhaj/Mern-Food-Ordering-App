import { combineReducers } from "redux";
import cartSlice from "./Cart/cartSlice";
import productsSlice from "./Products/productsSlice";
import AddressSlice from "./Address/AddressSlice";
import AuthSlice from "./Authentication.js/AuthSlice";



const rootReducer = combineReducers({
    cart : cartSlice ,
    products : productsSlice ,
    address : AddressSlice ,
    authentication : AuthSlice ,

})


export default rootReducer;