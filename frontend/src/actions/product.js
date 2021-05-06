import {
  SELECT_PRODUCT,
  TRIGGER_PRODUCT_LOADING,
  FETCH_PRODUCT,
  DATA_REQUESTED,
  RECEIVE_PRODUCT_SUCCESS,
  RECEIVE_PRODUCT_FAILURE,
} from '../reducers/consts';

export const selectProduct = data => ({
  type: SELECT_PRODUCT,
  payload: { id: data._id, details: data },
});

export const triggerProductLoading = () => ({
  type: TRIGGER_PRODUCT_LOADING,
  payload: { loading: true },
});

export const fetchProduct = id => ({
  type: FETCH_PRODUCT,
  payload: { id },
});

export const getData = id => ({
  type: DATA_REQUESTED,
  payload: { id },
});

export const receiveProductSuccess = data => ({
  type: RECEIVE_PRODUCT_SUCCESS,
  payload: {
    id: data._id,
    details: data,
    error: null,
    loading: false,
  },
});

export const receiveProductFailure = error => ({
  type: RECEIVE_PRODUCT_FAILURE,
  payload: {
    error,
    loading: false,
  },
});
