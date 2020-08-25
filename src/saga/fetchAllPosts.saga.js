import { put, call, takeEvery } from "redux-saga/effects";
import { fetchAllPosts } from "../services/tweetService";

import { fetchAllPostsSuccess, fetchAllPostsFailure } from "../actions";

function* fetchAllPostsAsync() {
  try {
    let posts = yield call(fetchAllPosts);
    yield put(fetchAllPostsSuccess(posts));
  } catch (error) {
    yield put(fetchAllPostsFailure(error.message));
  }
}

export function* watchFetchAllPosts() {
  yield takeEvery("FETCH_ALL_POSTS_REQUEST", fetchAllPostsAsync);
}
