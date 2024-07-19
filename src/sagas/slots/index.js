import { call, put, takeLatest } from "redux-saga/effects";
import { gql } from "@apollo/client";
import client from "utils/ApiHelpers";
import {
  FETCH_SLOTS_REQUEST,
  fetchSlotsSuccess,
  fetchSlotsFailure,
  BOOK_SLOTS_REQUEST,
} from "actions/slots";

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

const BOOK_SLOTS_MUTATION = gql`
  mutation bookSlot($bookedBy: String!, $dateTime: String!, $phoneNo: String!) {
    bookSlot(dateTime: $dateTime, bookedBy: $bookedBy, phoneNo: $phoneNo) {
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
      variables: { date: action.date },
    });
    yield put(fetchSlotsSuccess(response.data.slots));
  } catch (error) {
    yield put(fetchSlotsFailure(error.message));
  }
}

function* bookSlotsSaga(action) {
  try {
    const response = yield call(client.mutate, {
      mutation: BOOK_SLOTS_MUTATION,
      variables: {
        bookedBy: action.payload.name,
        dateTime: action.payload.slot,
        phoneNo: action.payload.phone,
      },
    });
    console.log(response);
    // yield put(fetchSlotsSuccess(response.data.bookSlot));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchSlots() {
  yield takeLatest(FETCH_SLOTS_REQUEST, fetchSlotsSaga);
}

export function* watchBookSlots() {
  yield takeLatest(BOOK_SLOTS_REQUEST, bookSlotsSaga);
}
