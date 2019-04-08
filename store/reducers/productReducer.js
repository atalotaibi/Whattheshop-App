import * as actionTypes from "../actions/types";

const initialState = {
  products: [],
  product: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case actionTypes.GET_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;
