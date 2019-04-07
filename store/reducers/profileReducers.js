import * as actionTypes from "../actions/types";

const initialState = {
  profile: [],
  orders: []
};

const profileReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case actionTypes.SAVE_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case actionTypes.ADD_ADDRESS:
      state.profile.addresses = state.profile.addresses.concat(action.payload);
      return {
        ...state,
        profile: { ...state.profile }
      };
    case actionTypes.DELETE_ADDRESS:
      let updatedProfile = state.profile.addresses.filter(
        address => address !== action.payload
      );
      return {
        ...state,
        profile: updatedProfile
      };
    case actionTypes.GET_ORDERS:
      return {
        ...state,
        orders: action.payload
      };

    default:
      return state;
  }
};

export default profileReducers;
