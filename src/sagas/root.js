import { all } from "redux-saga/effects";
import { watchFetchSlots } from "./slots";
import { watchBookSlots } from "./booking";

export default function* rootSaga() {
  yield all([watchFetchSlots(), watchBookSlots()]);
}
