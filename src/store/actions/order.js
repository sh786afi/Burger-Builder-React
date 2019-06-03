import * as actionType from "./actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionType.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};
export const purchaseBurgerFail = error => {
  return {
    type: actionType.PURCHASE_BURGER_FAIL,
    error: error
  };
};
export const purchaseBurgerStart = () => {
  return {
    type: actionType.PURCHASE_BURGER_START
  };
};
export const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post("/orders.json?auth=" + token, orderData)
      .then(response => {
        console.log(response);

        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};
export const purchaseInit = () => {
  return {
    type: actionType.PURCHASE_INIT
  };
};
export const fetchOredersSuccess = orders => {
  return {
    type: actionType.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};
export const fetchOredersFAIL = error => {
  return {
    type: actionType.FETCH_ORDERS_FAIL,
    error: error
  };
};
export const fetchOredersStart = () => {
  return {
    type: actionType.FETCH_ORDERS_START
  };
};
export const fetchOrders = token => {
  return dispatch => {
    dispatch(fetchOredersStart());
    axios
      .get("/orders.json?auth=" + token)
      .then(res => {
        const fetchOrders = [];
        for (let key in res.data) {
          fetchOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOredersSuccess(fetchOrders));
      })
      .catch(err => {
        dispatch(fetchOredersFAIL(err));
      });
  };
};
