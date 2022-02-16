import { Avatar, List } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const ProblemList = () => {
  const data = useSelector((state) => state.problem.data.data);

  console.log(data);
  return (
    <>
      {data ? (
        data.length > 0 ? (
          data.map((v) => {
            return (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={`${v.problemname}`}
                  description={`문제타입: ${v.problemtype}, 사이트: ${v.site} ,풀이년도: ${v.year}, 풀이일: ${v.solvedate} 성공여부: ${v.success}`}
                />
                {v.review === "1" ? (
                  <div style={{ color: "green" }}>복습완료</div>
                ) : (
                  <div style={{ color: "red" }}>복습안함</div>
                )}
              </List.Item>
            );
          })
        ) : (
          <div>조건에 맞는 문제가 없습니다.</div>
        )
      ) : (
        ""
      )}
    </>
  );
};

export default ProblemList;
