import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Switch>
            <Route component={HomePage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
