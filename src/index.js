import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import App from "./App";
import rootReducer from "./reducers";

import "./index.css";

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

    })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, logger));

// needed dependancies
// applyMiddleware from redux DONE above
// thunk from redux-thunk DONE above
// logger from redux-logger  DONE below
// rootReducer from ./reducers - already DONE?

// const store = createStore(rootReducer, applyMiddleware(logger,thunk));
const store = createStore(
  rootReducer,
  enhancer,
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
