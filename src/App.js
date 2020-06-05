import React from "react";
import store from "./store";
import * as actions from "./actionTypes";
import { bugAdded, bugRemoved } from "./actions";

function App() {
  // define subscribe function
  const unsubscribe = store.subscribe(() => {
    console.log("store Changed! ", store.getState());
  });

  // dispatching and passing a function will take care of the work
  store.dispatch(bugAdded("this is my description"));

  // dispatching and passing a function will take care of the work
  store.dispatch(bugRemoved(2));

  unsubscribe();
  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
