import { put, call } from 'redux-saga/effects';
import {
  receiveProductSuccess,
  receiveProductFailure,
  triggerProductLoading,
} from '../actions';
import axios from 'axios';

export function* onFetchProduct({ payload }) {
  try {
    //console.log('are we here, and the id is: ' + action.payload.id);
    yield put(triggerProductLoading());
    const { data } = yield call(getData, payload.id);
    console.log('Response data:', data);
    yield put(receiveProductSuccess(data));
  } catch (e) {
    yield put(receiveProductFailure(e));
  }
}

function getData(id) {
  // API Request
  try {
    const rsp = axios.get('/api/products/' + id);
    return rsp;
  } catch (error) {
    console.log('-----------------Network Error---------------');
    return error;
  }
}
