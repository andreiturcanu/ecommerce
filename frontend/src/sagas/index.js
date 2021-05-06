import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from '../reducers';
import { saga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);

export default store;
