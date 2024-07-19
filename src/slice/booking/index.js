import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    data: null,
    error: null,
    loading: false,
    selectedSlot: null,
    bookSuccess: false,
  },
  reducers: {
    fetchBookingRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBookingSuccess: (state, action) => {
      state.loading = false;
      state.bookSuccess = true;
      state.data = action.payload;
    },
    fetchBookingFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setState: (state, action) => {
      return (state = { ...state, ...action.payload });
    },
  },
});

export const {
  fetchBookingRequest,
  fetchBookingSuccess,
  fetchBookingFailure,
  setState,
} = bookingSlice.actions;

export default bookingSlice.reducer;
