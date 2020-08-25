import React from "react";
import { Route, Redirect } from "react-router-dom";
import firebase from "firebase";

const PrivateRoute = ({ component: Component, protectedRoute, ...rest }) => {
  const isUserPresent = firebase.auth().currentUser ? true : false;
  const isValidRoute =
    (protectedRoute && isUserPresent) || !(protectedRoute || isUserPresent);

  if (isValidRoute) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }
  return <Redirect to={protectedRoute ? "/login" : "/dashboard"} />;
};

export default PrivateRoute;
