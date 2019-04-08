import * as actionTypes from "./types";

export const getOrder = orderID => {
  return async dispatch => {
    try {
      const res = await instance.get(`order/${orderID}/detail/`);
      const order = res.data;
      dispatch({
        type: actionTypes.GET_ORDER,
        payload: order
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};

export const addToCart = product => {
  return async dispatch => {
    try {
      const res = await instance.post("CartItemCreateView/", product);
      const added_product = res.data;
      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: added_product
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};

export const deleteCartItem = cartItemID => {
  return async dispatch => {
    try {
      const res = await instance.delete(`${cartItemID}/CartItemDeleteView/`);
      const deletedCart = res.data;
      dispatch({
        type: actionTypes.DELETE_CART,
        payload: deletedCart
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};

export const checkout = order => {
  return async dispatch => {
    try {
      await instance.post("order/create/", order);
      dispatch({
        type: actionTypes.CREATE_ORDER
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};
