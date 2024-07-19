import { createSlice } from "@reduxjs/toolkit";

const slotSlice = createSlice({
  name: "slots",
  initialState: {
    loading: false,
    slots: [],
    error: null,
  },
  reducers: {
    fetchSlotsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSlotsSuccess: (state, action) => {
      state.loading = false;
      state.slots = action.payload;
    },
    fetchSlotsFailure: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { fetchSlotsRequest, fetchSlotsSuccess, fetchSlotsFailure } =
  slotSlice.actions;

export default slotSlice.reducer;
