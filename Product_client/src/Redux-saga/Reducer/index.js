import { combineReducers } from "redux";


import ProductReduce from "./MenuReducer"

const rootReducer = combineReducers({
    productStated: ProductReduce
})

export default rootReducer