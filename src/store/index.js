import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./ducks/rootReducer";
import sagas from "./ducks/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

const store = createStore(reducers, enhancers);

sagaMiddleware.run(sagas);

export default store;
