import axios from "axios";
import * as actionTypes from "./types";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const getProfile = profileID => {
  return async dispatch => {
    try {
      const res = await instance.get(`${profileID}/detail`);
      const profile = res.data;
      dispatch({
        type: actionTypes.GET_PROFILE,
        payload: profile
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};

export const saveProfile = (userProfile, profileID) => {
  return async dispatch => {
    try {
      const res = await instance.put(`${profileID}/update`, userProfile);
      const profile = res.data;
      dispatch({
        type: actionTypes.SAVE_PROFILE,
        payload: profile
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};

export const addAddress = user_address => {
  return async dispatch => {
    try {
      const res = await instance.post("addessCreate/", user_address);
      const address = res.data;
      dispatch({
        type: actionTypes.ADD_ADDRESS,
        payload: address
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};

export const deleteAddress = addressID => {
  return async dispatch => {
    try {
      await instance.delete(`${addressID}/addessDelete`);
      const address = res.data;
      dispatch({
        type: actionTypes.DELETE_ADDRESS,
        payload: address
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};

export const getOreders = () => {
  return async dispatch => {
    try {
      const res = await instance.get("order/list");
      const orderList = res.data;
      dispatch({
        type: actionTypes.GET_ORDERS,
        payload: orderList
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};
