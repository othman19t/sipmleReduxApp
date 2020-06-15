import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, combineReducers } from "redux";
import * as Reducers from "./reducer";
import { Provider } from "react-redux";

const store = createStore(
  combineReducers({
    userReducer: Reducers.userReducer,
    BugReducer: Reducers.BugReducer,
  })
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
