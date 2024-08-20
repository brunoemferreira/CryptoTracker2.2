import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./pages/public/Login/Login";
import Settings from "./pages/private/Settings/Settings";

function Routes() {
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() => {
          return localStorage.getItem("token") ? children : <Redirect to="/" />;
        }}
      ></Route>
    );
  }

  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Login />
      </Route>
      <PrivateRoute path="/settings">
        <Settings />
      </PrivateRoute>
    </BrowserRouter>
  );
}

export default Routes;
