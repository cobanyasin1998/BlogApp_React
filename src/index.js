import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "./styles/main.scss";

import { createStore, combineReducers } from "redux";

const state = {
  blogs: [
    {
      id: 1,
      title: "Blog Title 1",
      description: "Blog Description 1",
      dateAdded: 0,
    },
  ],
  auth: {
    userid: 1,
    username: "Yasin Çoban",
    email: "cobanyasin1998@gmail.com",
  },
};

const blogState = [];

const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const authState = {
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(combineReducers({
    blogs:blogReducer,
    auth:authReducer
}));

console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById("root"));
