import { takeEvery, put, call } from "redux-saga/effects";
import { FETCH_PRODUCTS } from "../reducers/consts";
import {
  receiveProductsSuccess,
  receiveProductsFailure,
  triggerLoading,
} from "../actions";
import axios from "axios";

function* onFetchProducts() {
  try {
    // API Request
    yield put(triggerLoading());
    const { data } = yield call(axios.get, "/api/products");
    yield put(receiveProductsSuccess(data));
  } catch (e) {
    yield put(receiveProductsFailure(e));
  }
}

export function* saga() {
  yield takeEvery(FETCH_PRODUCTS, onFetchProducts);
}
