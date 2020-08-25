import React, { Component } from "react";
import { Switch, withRouter } from "react-router-dom";
import firebase from "firebase";
import { Spinner } from "react-bootstrap";

import fire from "../config/Fire";

import PrivateRoute from "../components/PrivateRoute";
import Signup from "./signup";
import Dashboard from "../App";
import Login from "./login";

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: firebase.auth().currentUser,
      isLoading: true,
    };
  }

  async componentDidMount() {
    await this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user, "inside auth listener");
      if (user) {
        this.setState({
          user: {
            email: user.email,
            uid: user.uid,
          },
          isLoading: false,
        });
      } else {
        this.setState({
          user: null,
          isLoading: false,
        });
      }
    });
  }

  render() {
    return this.state.isLoading ? (
      <div
        id="actionInProgressSpinner"
        style={{
          height: "100vh",
          width: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      </div>
    ) : (
      <Switch>
        <PrivateRoute exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/login" component={Login} />
        <PrivateRoute
          exact
          protectedRoute
          path="/dashboard"
          component={Dashboard}
        />
      </Switch>
    );
  }
}

export default withRouter(Routes);
