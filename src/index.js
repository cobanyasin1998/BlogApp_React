import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "./styles/main.scss";
import configureStore from "./store/configure";
import { Provider } from "react-redux";
import { addBlog, removeBlog } from "./actions/blog";

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

const blog1 = store.dispatch(
  addBlog({
    title: "Blog1",
    description: "description",
  })
);
const blog2 = store.dispatch(
  addBlog({
    title: "Blog2",
    description: "description_2",
    dateAdded: Date.now(),
  })
);

store.dispatch(
  removeBlog({
    id: blog1.blog.id,
  })
);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
