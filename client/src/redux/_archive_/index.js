
import { combineReducers } from "redux";
import { productReducer } from "./reducer";

// combineReducers take an object
const rootReducer = combineReducers({
    allProducts: productReducer,
});

export default rootReducer