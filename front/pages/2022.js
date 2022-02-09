import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { get2022ProblemAction } from "../actions";
import ProblemList from "../components/ProblemList";

const problem2022 = () => {
  const dispatch = useDispatch();
  const getProblemList = useCallback((e) => {
    dispatch(get2022ProblemAction());
  });
  useEffect(() => {
    getProblemList();
  }, []);
  return (
    <div>
      <ProblemList onLoad={getProblemList} />
    </div>
  );
};

export default problem2022;
