import { call, put, takeLatest } from "redux-saga/effects";
import { gql } from "@apollo/client";
import client from "utils/ApiHelpers";
import {
  fetchSlotsFailure,
  fetchSlotsRequest,
  fetchSlotsSuccess,
} from "slice/slots";

const GET_SLOTS_QUERY = gql`
  query slots($date: String!) {
    slots(date: $date) {
      id
      datetime
      amount
      isBooked
    }
  }
`;

function* fetchSlotsSaga(action) {
  try {
    const response = yield call(client.query, {
      query: GET_SLOTS_QUERY,
      variables: { date: action.payload },
    });
    yield put(fetchSlotsSuccess(response.data.slots));
  } catch (error) {
    yield put(fetchSlotsFailure(error.message));
  }
}

export function* watchFetchSlots() {
  yield takeLatest(fetchSlotsRequest.type, fetchSlotsSaga);
}
