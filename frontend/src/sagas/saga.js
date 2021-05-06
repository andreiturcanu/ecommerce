import { takeEvery } from 'redux-saga/effects';
import { FETCH_PRODUCTS, FETCH_PRODUCT } from '../reducers/consts';
import { onFetchProducts } from './products-saga';
import { onFetchProduct } from './product-saga';

export function* saga() {
  yield takeEvery(FETCH_PRODUCTS, onFetchProducts);
  yield takeEvery(FETCH_PRODUCT, onFetchProduct);
}
