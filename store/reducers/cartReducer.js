import axios from "axios";
import * as actionTypes from "./types";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const getProducts = () => {
  return async dispatch => {
    try {
      const res = await instance.get("product/list");
      const products = res.data;
      dispatch({
        type: actionTypes.GET_PRODUCTS,
        payload: products
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};
