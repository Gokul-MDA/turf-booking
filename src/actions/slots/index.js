export const FETCH_SLOTS_REQUEST = "FETCH_SLOTS_REQUEST";
export const FETCH_SLOTS_SUCCESS = "FETCH_SLOTS_SUCCESS";
export const FETCH_SLOTS_FAILURE = "FETCH_SLOTS_FAILURE";
export const BOOK_SLOTS_REQUEST = "FETCH_SLOTS_FAILURE";

export const fetchSlotsRequest = (date) => ({
  type: FETCH_SLOTS_REQUEST,
  date,
});

export const fetchSlotsSuccess = (slots) => ({
  type: FETCH_SLOTS_SUCCESS,
  slots,
});

export const fetchSlotsFailure = (error) => ({
  type: FETCH_SLOTS_FAILURE,
  error,
});

export const bookSlotsRequest = (payload) => ({
  type: BOOK_SLOTS_REQUEST,
  payload,
});
