import { call, put, takeLatest } from "redux-saga/effects";
import { gql } from "@apollo/client";
import client from "utils/ApiHelpers";
import { fetchBookingRequest, fetchBookingSuccess } from "slice/booking";
import { fetchSlotsRequest } from "slice/slots";

const BOOK_SLOTS_MUTATION = gql`
  mutation bookSlot(
    $bookedBy: String!
    $dateTime: String!
    $phoneNo: String!
    $amount: Int!
  ) {
    bookSlot(
      dateTime: $dateTime
      bookedBy: $bookedBy
      phoneNo: $phoneNo
      amount: $amount
    ) {
      id
      datetime
      amount
      isBooked
    }
  }
`;

function* bookSlotsSaga(action) {
  try {
    const response = yield call(client.mutate, {
      mutation: BOOK_SLOTS_MUTATION,
      variables: {
        bookedBy: action.payload.name,
        dateTime: action.payload.slot,
        phoneNo: action.payload.phone,
        amount: action.payload.amount,
      },
    });
    yield put(fetchBookingSuccess());
    yield put(fetchSlotsRequest(response.data.bookSlot.datetime));
  } catch (error) {
    console.log(error);
  }
}

export function* watchBookSlots() {
  yield takeLatest(fetchBookingRequest.type, bookSlotsSaga);
}
