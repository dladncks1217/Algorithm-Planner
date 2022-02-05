import { Select } from "antd";
import React, { useState } from "react";

const ProblemType = () => {
  const [select, onChangeSelect] = useState("구현");

  const setSelect = (e) => {
    console.log(e.target.innerText);
    onChangeSelect(e.target.innerText);
  };
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
    <Select onClick={setSelect} value={select}>
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
