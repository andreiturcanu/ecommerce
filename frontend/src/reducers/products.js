import {
  FETCH_PRODUCTS,
  RECEIVE_PRODUCTS_SUCCESS,
  RECEIVE_PRODUCTS_FAILURE,
} from "./consts";

// const nextProductId = (todos) => {
//   const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
//   return maxId + 1;
// };

// const fetchProducts = (state) => {
//   return { ...state, error: null, loading: true };
// };

// const receiveProductsSuccess = (state, newItemText) => {
//   return { state };
// };

// const receiveProductsFailure = (state, newItemText) => {
//   return { state };
// };

// const addProduct = (state, newItemText) => {
//   return { state };
// };

// const selectProduct = (state, id) => {
//   return { state };
// };

// const updateProduct = (state, id, newContent) => {
//   return { state };
// };

// const deleteProduct = (state, id) => {
//   return { state };
// };

export default function productsReducer(
  state = { items: [], error: null, loading: false },
  { type, payload }
) {
  switch (type) {
    case "TRIGGER_LOADING":
      return {
        ...state,
        loading: payload.loading,
      };
    case RECEIVE_PRODUCTS_SUCCESS:
      // const { error, loading, items  } = payload;
      return {
        ...state,
        items: payload.items,
        loading: payload.loading,
        error: payload.error,
      };
    case RECEIVE_PRODUCTS_FAILURE:
      const { error, loading } = payload;

      return { ...state, error, loading };
    // case "ADD":
    //   return addProduct(state, payload);
    // case "SELECT":
    //   return selectProduct(state, payload);
    // case "UPDATE":
    //   return updateProduct(state, payload.id, payload.newContent);
    // case "DELETE":
    //   return deleteProduct(state, payload);
    default:
      return state;
  }
}
