import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProblemListAction } from "../actions";
import ProblemList from "../components/ProblemList";

const Index = () => {
  const dispatch = useDispatch();
  const getProblemList = useCallback((e) => {
    dispatch(getProblemListAction());
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

export default Index;
