import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

export const addProblemAction = createAsyncThunk(
  "problem/update",
  async (data, ThunkAPI) => {
    console.dir(data);
    const result = axios.post("/year/add", {
      problemname: data.name,
      problemtype: data.type,
      year: data.year,
      solvedate: data.date,
      success: data.isCorrect,
      review: data.review,
    });
    return result;
  }
);

export const get2021ProblemAction = createAsyncThunk(
  "problem/2021",
  async (data, ThunkAPI) => {
    const result = axios.post("/year/2021");
    return result;
  }
);

export const get2022ProblemAction = createAsyncThunk(
  "problem/2022",
  async (data, ThunkAPI) => {
    const result = axios.post("/year/2022");
    return result;
  }
);

export const getReviewedProblemAction = createAsyncThunk(
  "problem/reviewed",
  async (data, ThunkAPI) => {
    const result = axios.post("/year/reviewed");
    return result;
  }
);

export const getNotReviewedProblemAction = createAsyncThunk(
  "problem/notreviewed",
  async (data, ThunkAPI) => {
    const result = axios.post("/year/notreviewed");
    return result;
  }
);

export const getTypeProblemAction = createAsyncThunk(
  "problem/type",
  async (data, ThunkAPI) => {
    const result = axios.post(`/year/typecheck/${data.type}`);
    return result;
  }
);
