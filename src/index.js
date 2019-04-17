import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import App from "./App";
import rootReducer from "./reducers";

import "./index.css";

// needed dependancies
// applyMiddleware from redux DONE above
// thunk from redux-thunk DONE above
// logger from redux-logger  DONE below
// rootReducer from ./reducers - already DONE?

const store = createStore(rootReducer, applyMiddleware(logger,thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
