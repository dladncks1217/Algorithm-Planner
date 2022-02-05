import { Select } from "antd";
import React, { useState } from "react";

const ProblemType = ({ type, onChangeType }) => {
  const problemtype = [
    "구현",
    "해시",
    "DP",
    "수학",
    "DFS",
    "백트래킹",
    "정렬",
    "그리디",
    "BFS",
    "와샬 플로이드",
    "다익스트라",
    "그래프",
    "이분탐색",
    "큐",
    "스택",
    "투포인터",
    "슬라이딩윈도우",
    "완전탐색",
    "문자열",
    "기타",
  ];
  return (
    <Select onClick={onChangeType} value={type}>
      {problemtype.map((v) => {
        return (
          <Select.Option key={v} value={v}>
            {v}
          </Select.Option>
        );
      })}
    </Select>
  );
};

export default ProblemType;
