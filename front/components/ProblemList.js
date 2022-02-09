import { Avatar, List } from "antd";
import React from "react";

const ProblemList = () => {
  return (
    <>
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">adsf</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    </>
  );
};

export default ProblemList;
