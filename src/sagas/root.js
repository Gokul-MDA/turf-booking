import { all } from "redux-saga/effects";
import { watchFetchSlots } from "./slots";
import { watchPostSlot } from "./booking";

export default function* rootSaga() {
  yield all([watchFetchSlots(), watchPostSlot()]);
}
