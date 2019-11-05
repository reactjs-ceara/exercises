import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import sagas from "./sagas";

export const createReduxStore = () => {
  const initialState = {};
  const middlewares = [];
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middlewares));
  const enhancer = compose(...enhancers);
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(sagas);
  return store;
};
