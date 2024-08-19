import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./pages/public/Login/Login";
import Settings from "./pages/private/Settings/Settings";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
    </BrowserRouter>
  );
}

export default Routes;
