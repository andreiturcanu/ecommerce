import {
  TRIGGER_LOADING,
  RECEIVE_PRODUCTS_SUCCESS,
  RECEIVE_PRODUCTS_FAILURE,
} from "./consts";

const triggerLoading = (state, payload) => {
  return {
    ...state,
    loading: payload.loading,
  };
};

const receiveProductsSuccess = (state, payload) => {
  return {
    ...state,
    items: payload.items,
    loading: payload.loading,
    error: payload.error,
  };
};

const receiveProductsFailure = (state, { error, loading }) => {
  return { ...state, error, loading };
};

export default function productsReducer(
  state = { items: [], error: null, loading: false },
  { type, payload }
) {
  switch (type) {
    case TRIGGER_LOADING:
      return triggerLoading(state, payload);
    case RECEIVE_PRODUCTS_SUCCESS:
      return receiveProductsSuccess(state, payload);
    case RECEIVE_PRODUCTS_FAILURE:
      return receiveProductsFailure(state, payload);
    default:
      return state;
  }
}
