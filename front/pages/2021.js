import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get2021ProblemAction, getProblemListAction } from "../actions";
import ProblemList from "../components/ProblemList";

const problem2021 = () => {
  const dispatch = useDispatch();
  const getProblemList = useCallback((e) => {
    dispatch(get2021ProblemAction());
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

export default problem2021;
