import { ActionTypes } from "./types";

// 1st action - SET_PRODUCTS
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

// 2nd action - SELECTED_PRODUCT
// Here we pass only the selected product and change the type
export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products,
    };
};