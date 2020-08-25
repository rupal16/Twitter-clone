import { all } from "redux-saga/effects";

import { watchCreateUser } from "./createUser.saga";
import { watchCreateTweet } from "./createTweet.saga";
import { watchLoginUser } from "./login.saga";
import { watchFetchAllPosts } from "./fetchAllPosts.saga";
import { watchFetchUser } from "./fetchUser.saga";

export function* rootSaga() {
  yield all([
    watchCreateUser(),
    watchCreateTweet(),
    watchLoginUser(),
    watchFetchAllPosts(),
    watchFetchUser(),
  ]);
}
