import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/';
// import createSagaMiddleware from 'redux-saga';

// const logger = createLogger();
// const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

export default store;
