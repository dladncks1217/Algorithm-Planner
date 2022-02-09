import { combineReducers } from "redux";
import { problemSlice } from "./problems";

export default combineReducers({
  problem: problemSlice.reducer,
});
