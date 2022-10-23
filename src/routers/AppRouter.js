import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from '../components/HomePage';
import BlogListPage from '../components/BlogListPage';
import BlogDetailsPage from '../components/BlogDetailsPage';
import Header from '../components/Header';
import ContactPage from '../components/ContactPage';
 import NotFoundPage from '../components/NotFoundPage';
import AddBlogPage from "../components/AddBlogPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Switch>
   

          <Route  exact path="/blogs">
            <BlogListPage />
          </Route>

          <Route  exact path="/blogs/:id">
            <BlogDetailsPage />
          </Route>
          <Route   path="/create">
            <AddBlogPage />
          </Route>
          <Route  exact path="/contact">
            <ContactPage />
          </Route>
          <Route  path="/">
            <HomePage />
          </Route>
          {/* <Route  exact path="/contact">
            <NotFoundPage />
          </Route> */}


        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
