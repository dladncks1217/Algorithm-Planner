import { createSlice } from "@reduxjs/toolkit";
import {
  addProblemAction,
  get2021ProblemAction,
  get2022ProblemAction,
  getNotReviewedProblemAction,
  getReviewedProblemAction,
  getTypeProblemAction,
} from "../actions";

export const initialState = {
  data: "",
  getProblemErrorReason: null,
  problemAdding: false,
  problemAdded: false,
  problemAddErrorReason: null,
};

export const addProblemSlice = createSlice({
  name: "addProblem",
  initialState,
  reducers: {},
  extraReducers: {
    [addProblemAction.pending](state, action) {
      state.problemAdding = true;
    },
    [addProblemAction.fulfilled](state, action) {
      state.problemAdded = true;
      state.problemAdding = false;
    },
    [addProblemAction.rejected](state, action) {
      state.problemAdding = false;
      state.problemAddErrorReason = action.error;
    },
  },
});
