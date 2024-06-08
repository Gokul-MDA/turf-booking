import { actionConfig } from "actions/slots";
import { call, put, takeEvery } from "redux-saga/effects";
import { get } from "utils/ApiHelpers";

// Worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchSlots({ payload }) {
  try {
    const user = yield call(get, `/slots/${payload}`);
    console.log(payload, "user123");
    yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

// Allows concurrent fetches of user
export function* watchFetchSlots() {
  yield takeEvery(actionConfig.getSlots, fetchSlots);
}
