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
  problemLoading: false,
  problemLoaded: false,
  problemLoadErrorReason: null,
};

export const addProblemSlice = createSlice({
  name: "addProblem",
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
    },
    [addProblemAction.rejected](state, action) {
      state.problemAdding = false;
      state.problemAddErrorReason = action.error;
    },
  },
});

export const problem2021Slice = createSlice({
  name: "2021Problem",
  initialState,
  reducers: {},
  extraReducers: {
    [get2021ProblemAction.pending](state, action) {
      state.problemLoaded = false;
      state.problemLoading = true;
    },
    [get2021ProblemAction.pending](state, action) {
      state.problemLoading = false;
      state.problemLoaded = true;
    },
    [get2021ProblemAction.pending](state, action) {
      state.problemLoaded = false;
      state.problemLoadErrorReason = action.error;
    },
  },
});

export const problem2022Slice = createSlice({
  name: "2022Problems",
  initialState,
  reducers: {},
  extraReducers: {
    [get2022ProblemAction.pending](state, action) {
      state.problemLoaded = false;
      state.problemLoading = true;
    },
    [get2022ProblemAction.pending](state, action) {
      state.problemLoading = false;
      state.problemLoaded = true;
    },
    [get2022ProblemAction.pending](state, action) {
      state.problemLoaded = false;
      state.problemLoadErrorReason = action.error;
    },
  },
});

export const getNotReviewedProblemSlice = createSlice({
  name: "notReviewedProblems",
  initialState,
  reducers: {},
  extraReducers: {
    [getNotReviewedProblemAction.pending](state, action) {
      state.problemLoaded = false;
      state.problemLoading = true;
    },
    [getNotReviewedProblemAction.pending](state, action) {
      state.problemLoading = false;
      state.problemLoaded = true;
    },
    [getNotReviewedProblemAction.pending](state, action) {
      state.problemLoaded = false;
      state.problemLoadErrorReason = action.error;
    },
  },
});

export const getReviewedProblemSlice = createSlice({
  name: "reviewedProblems",
  initialState,
  reducers: {},
  extraReducers: {
    [getReviewedProblemAction.pending](state, action) {
      state.problemLoaded = false;
      state.problemLoading = true;
    },
    [getReviewedProblemAction.pending](state, action) {
      state.problemLoading = false;
      state.problemLoaded = true;
    },
    [getReviewedProblemAction.pending](state, action) {
      state.problemLoaded = false;
      state.problemLoadErrorReason = action.error;
    },
  },
});

export const getTypeProblemSlice = createSlice({
  name: "typeProblems",
  initialState,
  reducers: {},
  extraReducers: {
    [getTypeProblemAction.pending](state, action) {
      state.problemLoaded = false;
      state.problemLoading = true;
    },
    [getTypeProblemAction.pending](state, action) {
      state.problemLoading = false;
      state.problemLoaded = true;
    },
    [getTypeProblemAction.pending](state, action) {
      state.problemLoaded = false;
      state.problemLoadErrorReason = action.error;
    },
  },
});
