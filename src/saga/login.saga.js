import { put, call, takeEvery } from "redux-saga/effects";
import { SignInAuth } from "../services/auth";
import { fetchUser } from "../services/userService";
import { push } from "connected-react-router";

import { loginSuccess, loginFailure } from "../actions";

function* loginAsync({ payload }) {
  try {
    yield call(SignInAuth, payload.email, payload.password);
    let userData = yield call(fetchUser);
    yield put(
      loginSuccess(
        userData.displayName,
        userData.userName,
        userData.email,
        userData.dob
      )
    );
    yield put(push("/dashboard"));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* watchLoginUser() {
  yield takeEvery("LOGIN_REQUEST", loginAsync);
}
