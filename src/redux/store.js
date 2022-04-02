import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducer";
import rootSaga from "./saga/index";

const sagaMiddleware = createSagaMiddleware();

const composed = compose(applyMiddleware(sagaMiddleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(
    rootReducer,
    composed
  )
sagaMiddleware.run(rootSaga);

export default store;
