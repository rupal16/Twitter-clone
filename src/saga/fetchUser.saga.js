import { put, call, takeEvery } from "redux-saga/effects";
import { fetchUser } from "../services/userService";

import { fetchUserSuccess, fetchUserFailure } from "../actions";

function* fetchUserAsync() {
  try {
    const userData = yield call(fetchUser);
    yield put(
      fetchUserSuccess(
        userData.displayName,
        userData.userName,
        userData.email,
        userData.dob
      )
    );
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

export function* watchFetchUser() {
  yield takeEvery("FETCH_USER_REQUEST", fetchUserAsync);
}
