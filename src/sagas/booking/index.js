import { actionConfig } from "actions/booking";
import { call, put, takeEvery } from "redux-saga/effects";
import { post } from "utils/ApiHelpers";

// Worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* postSlot({ payload }) {
  try {
    const user = yield call(post, "/slots", payload);
    console.log(payload, "user123");
    yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

// Allows concurrent fetches of user
export function* watchPostSlot() {
  yield takeEvery(actionConfig.postSlot, postSlot);
}
