import { combineReducers } from "redux";
import {
  addProblemSlice,
  problem2021Slice,
  problem2022Slice,
  getNotReviewedProblemSlice,
  getReviewedProblemSlice,
  getTypeProblemSlice,
} from "./problems";

export default combineReducers({
  addProblem: addProblemSlice.reducer,
  get2021: problem2021Slice.reducer,
  get2022: problem2022Slice.reducer,
  notreviewed: getNotReviewedProblemSlice.reducer,
  reviewed: getReviewedProblemSlice.reducer,
  typeProblem: getTypeProblemSlice.reducer,
});
