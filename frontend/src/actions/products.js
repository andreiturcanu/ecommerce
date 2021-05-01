import {
  TRIGGER_LOADING,
  FETCH_PRODUCTS,
  RECEIVE_PRODUCTS_SUCCESS,
  RECEIVE_PRODUCTS_FAILURE,
} from '../reducers/consts';

export const triggerLoading = () => ({
  type: TRIGGER_LOADING,
  payload: { loading: true },
});

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const receiveProductsSuccess = data => ({
  type: RECEIVE_PRODUCTS_SUCCESS,
  payload: {
    items: data.products,
    error: null,
    loading: false,
  },
});

export const receiveProductsFailure = error => ({
  type: RECEIVE_PRODUCTS_FAILURE,
  payload: {
    error,
    loading: false,
  },
});
