import { put, call } from 'redux-saga/effects';
import {
  receiveProductsSuccess,
  receiveProductsFailure,
  triggerLoading,
} from '../actions';
import axios from 'axios';

export function* onFetchProducts() {
  try {
    // API Request
    yield put(triggerLoading());
    const { data } = yield call(axios.get, '/api/products');
    yield put(receiveProductsSuccess(data));
  } catch (e) {
    yield put(receiveProductsFailure(e));
  }
}
