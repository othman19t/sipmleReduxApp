import React from "react";
import store from "./store";

function App() {
  store.dispatch({ type: "bugAdded", payload: { description: "first Bug" } });
  console.log(store.getState());
  store.dispatch({ type: "bugRemoved", payload: { id: 2 } });
  console.log(store.getState());

  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
