import { combineReducers } from "redux";
import cartSlice from "./Cart/cartSlice";
import productsSlice from "./Products/productsSlice";
import AddressSlice from "./Address/AddressSlice";
import Authslice from "./Authentication.js/Authslice";



const rootReducer = combineReducers({
    cart : cartSlice ,
    products : productsSlice ,
    address : AddressSlice ,
    authentication : Authslice ,

})


export default rootReducer;