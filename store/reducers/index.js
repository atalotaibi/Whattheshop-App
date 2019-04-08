import { combineReducers } from "redux";

import authReducer from "./authReducer";
import profileReducers from "./profileReducers";
import categoriesReducer from "./categoriesReducer";
import productReducer from "./productReducer";

export default combineReducers({
  authReducer: authReducer,
  profileReducers: profileReducers,
  categoriesReducer: categoriesReducer,
  productReducer: productReducer
});
