import { combineReducers } from 'redux';
import productsReducer from './products';
import productReducer from './product';

const allReducers = combineReducers({
  products: productsReducer,
  product: productReducer,
});

export default allReducers;
