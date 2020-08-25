import { put, call, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";

import { saveUserService, fetchUser } from "../services/userService";

import { createUserSuccess, createUserFailure } from "../actions";

function* createUserAsync({ payload }) {
  try {
    yield call(
      saveUserService,
      payload.displayName,
      payload.userName,
      payload.email,
      payload.dob
    );
    let userData = yield call(fetchUser);

    yield put(
      createUserSuccess(
        userData.displayName,
        userData.userName,
        userData.email,
        userData.dob
      )
    );

    yield put(push("/dashboard"));
  } catch (error) {
    yield put(createUserFailure(error.message));
  }
}

export function* watchCreateUser() {
  yield takeEvery("CREATE_USER_REQUEST", createUserAsync);
}
