import { combineReducers } from "@reduxjs/toolkit";
import demoReducer from "./demo";
import slotsReducer from "./slots.js";

const rootReducer = combineReducers({
  user: demoReducer,
  slots: slotsReducer,
});

export default rootReducer;
