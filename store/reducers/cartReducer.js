import * as actionTypes from "../actions/types";

const initialState = {
  order: []
};

const profileReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDER:
      return {
        ...state,
        order: action.payload
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        order: state.order.concat(action.payload)
      };
    case actionTypes.DELETE_CART:
      let updatedOrder = state.order.filter(
        cartItem => cartItem !== action.payload
      );
      return {
        ...state,
        order: updatedOrder
      };
    case actionTypes.CREATE_ORDER:
      let updatedProfile = state.profile.addresses.filter(
        address => address !== action.payload
      );
      return {
        ...state,
        profile: updatedProfile
      };

    default:
      return state;
  }
};

export default profileReducers;
