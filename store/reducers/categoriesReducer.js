import * as actionTypes from "../actions/types";

const initialState = {
  categories: []
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return {
        ...state,
        profile: action.payload
      };

    default:
      return state;
  }
};

export default categoriesReducer;
