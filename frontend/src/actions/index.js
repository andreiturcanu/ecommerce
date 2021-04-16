import {
  FETCH_PRODUCTS,
  RECEIVE_PRODUCTS_SUCCESS,
  RECEIVE_PRODUCTS_FAILURE,
} from "../reducers/consts";

export const fetchProduct = () => ({
  type: FETCH_PRODUCTS,
});

export const receiveProductSuccess = (data) => ({
  type: RECEIVE_PRODUCTS_SUCCESS,
  data,
});

export const receiveProductFailure = (error) => ({
  type: RECEIVE_PRODUCTS_FAILURE,
  error,
});

export const addProduct = (product) => {
  return {
    type: "ADD",
    payload: product,
  };
};

export const updateProduct = (id, newContent) => {
  return {
    type: "UPDATE",
    payload: {
      id,
      newContent,
    },
  };
};

export const deleteProduct = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};

export const selectProduct = (id) => {
  return {
    type: "SELECT",
    payload: id,
  };
};
