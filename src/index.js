import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
import logger from "redux-logger";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import { rootSaga } from "./saga";
import { createRootReducer } from "./reducers";

import history from "./utils/history";

import Routes from "./routes";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(history),
  compose(applyMiddleware(sagaMiddleware, routerMiddleware(history), logger))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
