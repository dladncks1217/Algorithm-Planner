import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getProblemListAction } from "../actions";
import ProblemList from "../components/ProblemList";

const Index = () => {
  const dispatch = useDispatch();
  const getProblemList = useCallback((e) => {
    dispatch(getProblemListAction());
  });
  return (
    <div onLoad={getProblemList}>
      <ProblemList />
    </div>
  );
};

export default Index;
