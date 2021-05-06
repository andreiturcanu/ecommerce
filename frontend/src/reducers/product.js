import {
  SELECT_PRODUCT,
  TRIGGER_PRODUCT_LOADING,
  RECEIVE_PRODUCT_SUCCESS,
  RECEIVE_PRODUCT_FAILURE,
} from './consts';

const selectProduct = (state, { id, details }) => {
  return {
    ...state,
    id,
    details,
  };
};

const triggerProductLoading = (state, { loading }) => {
  return {
    ...state,
    loading,
  };
};

const receiveProductSuccess = (state, { id, details, loading, error }) => {
  return {
    ...state,
    id,
    details,
    loading,
    error,
  };
};

const receiveProductFailure = (state, { error, loading }) => {
  return { ...state, error, loading };
};

export default function productReducer(
  state = { id: null, details: {}, error: null, loading: false },
  { type, payload }
) {
  switch (type) {
    case SELECT_PRODUCT:
      return selectProduct(state, payload);
    case TRIGGER_PRODUCT_LOADING:
      return triggerProductLoading(state, payload);
    case RECEIVE_PRODUCT_SUCCESS:
      return receiveProductSuccess(state, payload);
    case RECEIVE_PRODUCT_FAILURE:
      return receiveProductFailure(state, payload);
    default:
      return state;
  }
}
