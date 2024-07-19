import { combineReducers } from "@reduxjs/toolkit";
import slotsReducer from "./slots/index.js";
import bookingReducer from "./booking";

const rootReducer = combineReducers({
  booking: bookingReducer,
  slots: slotsReducer,
});

export default rootReducer;
