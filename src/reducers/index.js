import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { userProfile } from "./user.reducer";
import { userTweet } from "./tweet.reducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    userProfile,
    userTweet,
  });

export { createRootReducer };
