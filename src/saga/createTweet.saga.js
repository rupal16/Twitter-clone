import { put, call, takeEvery } from "redux-saga/effects";
import { saveTweet } from "../services/tweetService";

import { createTweetSuccess, createTweetFailure } from "../actions";

function* createTweetAsync({ payload }) {
  try {
    const posts = yield call(saveTweet, payload.message, payload.url);
    yield put(createTweetSuccess(posts));
  } catch (error) {
    yield put(createTweetFailure(error.message));
  }
}

export function* watchCreateTweet() {
  yield takeEvery("CREATE_TWEET_REQUEST", createTweetAsync);
}
