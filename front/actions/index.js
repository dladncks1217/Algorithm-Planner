import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

export const addProblemAction = createAsyncThunk(
  "problem/update",
  async (data, ThunkAPI) => {
    console.dir(data);
    const result = axios.post("/problem/add", {
      problemname: data.name,
      site: data.site,
      problemtype: data.type,
      year: data.year,
      solvedate: data.date,
      success: data.isCorrect,
      review: data.review,
    });
    return result;
  }
);

export const getProblemListAction = createAsyncThunk(
  "problem/all",
  async () => {
    const result = axios.post("/problem/all");
    return result;
  }
);

export const get2021ProblemAction = createAsyncThunk(
  "problem/2021",
  async () => {
    const result = axios.post("/problem/2021");
    return result;
  }
);

export const get2022ProblemAction = createAsyncThunk(
  "problem/2022",
  async () => {
    const result = axios.post("/problem/2022");
    return result;
  }
);

export const getReviewedProblemAction = createAsyncThunk(
  "problem/reviewed",
  async () => {
    const result = axios.post("/problem/reviewed");
    return result;
  }
);

export const getNotReviewedProblemAction = createAsyncThunk(
  "problem/notreviewed",
  async () => {
    const result = axios.post("/problem/notreviewed");
    return result;
  }
);

export const getSiteProblemAction = createAsyncThunk(
  "problem/site",
  async (data, ThunkAPI) => {
    console.log(data);
    const result = axios.post(`problem/site/${data.site}`);
    return result;
  }
);

export const getTypeProblemAction = createAsyncThunk(
  "problem/type",
  async (data, ThunkAPI) => {
    const result = axios.post(`/problem/typecheck/${data.type}`);
    return result;
  }
);
