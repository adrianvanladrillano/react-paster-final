import { ActionTypes } from "./types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Aditya",
      category: "programmer",
    },
  ],
};

// 1st parameter is the initial state and the second one is the action
// we destructure the type and the payload
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // If our action is set product
    case ActionTypes.SET_PRODUCTS:
      return state; // return the state 
    default:
      return state;
  }
};