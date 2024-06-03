import { combineReducers } from "@reduxjs/toolkit";
import demoReducer from "./demo";

const rootReducer = combineReducers({
  user: demoReducer,
});

export default rootReducer;
