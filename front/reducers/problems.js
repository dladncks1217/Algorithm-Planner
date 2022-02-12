import { createSlice } from "@reduxjs/toolkit";
import {
  addProblemAction,
  get2021ProblemAction,
  get2022ProblemAction,
  getNotReviewedProblemAction,
  getProblemListAction,
  getReviewedProblemAction,
  getTypeProblemAction,
  getSiteProblemAction,
} from "../actions";

export const initialState = {
  data: "",
  getProblemErrorReason: null,
  problemAdding: false,
  problemAdded: false,
  problemAddErrorReason: null,
  problemLoading: false,
  problemLoaded: false,
  problemLoadErrorReason: null,
};

export const problemSlice = createSlice({
  name: "Problem",
  initialState,
  reducers: {},
  extraReducers: {
    [addProblemAction.pending](state, action) {
      state.problemAdding = true;
      state.problemAdded = false;
    },
    [addProblemAction.fulfilled](state, action) {
      state.problemAdded = true;
      state.problemAdding = false;
      state.data = action.payload;
    },
    [addProblemAction.rejected](state, action) {
      state.problemAdding = false;
      state.problemAddErrorReason = action.error;
    },
    [get2021ProblemAction.pending](state, action) {
      state.problemLoaded = false;
      state.problemLoading = true;
    },
    [get2021ProblemAction.fulfilled](state, action) {
      state.problemLoading = false;
      state.problemLoaded = true;
      state.data = action.payload;
    },
    [get2021ProblemAction.rejected](state, action) {
      state.problemLoaded = false;
      state.problemLoadErrorReason = action.error;
    },
    [get2022ProblemAction.pending](state, action) {
      state.problemLoaded = false;
      state.problemLoading = true;
    },
    [get2022ProblemAction.fulfilled](state, action) {
      state.problemLoading = false;
      state.problemLoaded = true;
      state.data = action.payload;
    },
    [get2022ProblemAction.rejected](state, action) {
      state.problemLoaded = false;
      state.problemLoadErrorReason = action.error;
    },
    [getNotReviewedProblemAction.pending](state, action) {
      state.problemLoaded = false;
      state.problemLoading = true;
    },
    [getNotReviewedProblemAction.fulfilled](state, action) {
      state.problemLoading = false;
      state.problemLoaded = true;
      state.data = action.payload;
    },
    [getNotReviewedProblemAction.rejected](state, action) {
      state.problemLoaded = false;
      state.problemLoadErrorReason = action.error;
    },
    [getReviewedProblemAction.pending](state, action) {
      state.problemLoaded = false;
      state.problemLoading = true;
    },
    [getReviewedProblemAction.fulfilled](state, action) {
      state.problemLoading = false;
      state.problemLoaded = true;
      state.data = action.payload;
    },
    [getReviewedProblemAction.rejected](state, action) {
      state.problemLoaded = false;
      state.problemLoadErrorReason = action.error;
    },
    [getTypeProblemAction.pending](state, action) {
      state.problemLoaded = false;
      state.problemLoading = true;
    },
    [getTypeProblemAction.fulfilled](state, action) {
      state.problemLoading = false;
      state.problemLoaded = true;
      state.data = action.payload;
    },
    [getTypeProblemAction.rejected](state, action) {
      state.problemLoaded = false;
      state.problemLoadErrorReason = action.error;
    },
    [getProblemListAction.pending](state, action) {
      state.problemLoaded = false;
      state.problemLoading = true;
    },
    [getProblemListAction.fulfilled](state, action) {
      state.problemLoading = false;
      state.problemLoaded = true;
      state.data = action.payload;
    },
    [getProblemListAction.rejected](state, action) {
      state.problemLoaded = false;
      state.problemLoadErrorReason = action.error;
    },
    [getSiteProblemAction.pending](state, action) {
      state.problemLoaded = false;
      state.problemLoading = true;
    },
    [getSiteProblemAction.fulfilled](state, action) {
      state.problemLoading = false;
      state.problemLoaded = true;
      state.data = action.payload;
    },
    [getSiteProblemAction.rejected](state, action) {
      state.problemLoaded = false;
      state.problemLoadErrorReason = action.error;
    },
  },
});
