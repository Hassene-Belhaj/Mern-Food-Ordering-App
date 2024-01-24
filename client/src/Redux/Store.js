import {configureStore ,  applyMiddleware} from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import rootReducer from './rootReducer';


const Store = configureStore(

    { reducer : rootReducer } , applyMiddleware(thunk)
    
    )



export default Store ;