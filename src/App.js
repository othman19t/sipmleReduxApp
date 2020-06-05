import React from "react";
import store from "./store";
import * as action from "./actiontypes";

function App() {
  // define subscribe function
  const unsubscribe = store.subscribe(() => {
    console.log("store Changed! ", store.getState());
  });
  store.dispatch({
    type: action.BUG_ADDED,
    payload: { description: "first Bug" },
  });
  store.dispatch({ type: action.BUG_REMOVED, payload: { id: 2 } });
  unsubscribe();
  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
