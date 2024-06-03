import { all } from "redux-saga/effects";
import { watchFetchUser } from "./demo";

export default function* rootSaga() {
  yield all([watchFetchUser()]);
}
