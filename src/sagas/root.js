import { all } from "redux-saga/effects";
import { watchBookSlots, watchFetchSlots } from "./slots";

export default function* rootSaga() {
  yield all([watchFetchSlots(), watchBookSlots()]);
}
