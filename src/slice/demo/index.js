import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    fetchUserRequest: (state) => {
      state.error = null;
    },
    fetchUserSuccess: (state, action) => {
      state.data = action.payload;
    },
    fetchUserFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } =
  userSlice.actions;

export default userSlice.reducer;
