import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/';
import loadState from './helpers/localStorage';
import storageMiddleware from './helpers/storageMiddleware';

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(logger, storageMiddleware)
);

export default store;
