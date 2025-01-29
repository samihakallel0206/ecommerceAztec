import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
//don't copy/paste
import rootReducer from "../reducers";
// ******************
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  //don't copy/paste
  rootReducer,
  // ******************
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
