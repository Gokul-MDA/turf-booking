import { call, put, takeEvery, all } from "redux-saga/effects";
// import api from "./api"; // Assuming you have an API module

// Worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const user = yield call("", action.payload.userId);
    yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export function* watchFetchUser() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}
