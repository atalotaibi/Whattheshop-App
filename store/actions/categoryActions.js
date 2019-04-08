import axios from "axios";
import * as actionTypes from "./types";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const getCategories = () => {
  return async dispatch => {
    try {
      const res = await instance.get("CategorysList/");
      const categories = res.data;
      dispatch({
        type: actionTypes.GET_CATEGORIES,
        payload: categories
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};
