import React from "react";
import store from "./store";
import * as actions from "./actionTypes";
import { bugAdded, bugRemoved, bugResolved, addPost } from "./actions";

import UserPosts from "./userPost";

function App() {
  // // define subscribe function
  // const unsubscribe = store.subscribe(() => {
  //   console.log("store Changed! ", store.getState());
  // });

  // // dispatching and passing a function will take care of the work
  // store.dispatch(bugAdded("this is my description"));

  // // resolving bugs
  // store.dispatch(bugResolved(2));

  // // dispatching and passing a function will take care of the work
  // store.dispatch(bugRemoved(2));
  // store.dispatch(addPost("this is the post"));

  // unsubscribe();
  return (
    <div className="App">
      <h1>hello world</h1>
      <div>
        <h2>users Post:</h2>
        <UserPosts />
      </div>
      <div>
        <h2>user pugs:</h2>
      </div>
    </div>
  );
}

export default App;
