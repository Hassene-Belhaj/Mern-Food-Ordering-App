import { combineReducers } from "redux";
import cartSlice from "./Cart/cartSlice";
import productsSlice from "./Products/productsSlice";
import AddressSlice from "./Address/AddressSlice";



const rootReducer = combineReducers({
    cart : cartSlice ,
    products : productsSlice ,
    address : AddressSlice ,

})


export default rootReducer;