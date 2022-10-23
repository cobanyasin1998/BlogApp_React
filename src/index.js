import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "./styles/main.scss";

import { createStore } from "redux";

const initialState = {
  count: 0,
};
const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy,
      };

    case "DECREMENT":
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
  return state;
});

console.log(store.getState());

store.dispatch({
  type: "INCREMENT",
  incrementBy: 10,
});
store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
  type: "DECREMENT",
});

store.subcribe(()=>{

    console.log(store.getState());

})

ReactDOM.render(<AppRouter />, document.getElementById("root"));
