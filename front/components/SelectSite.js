import { Button, Form, Select } from "antd";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { getSiteProblemAction } from "../actions";

const SelectSite = () => {
  const siteList = ["백준", "프로그래머스", "leetcode"];
  const [site, setSite] = useState("프로그래머스");
  const dispatch = useDispatch();

  const onSubmit = useCallback((e) => {
    console.log(site);
    dispatch(
      getSiteProblemAction({
        site,
      })
    );
  }, []);

  const onChangeSite = useCallback((e) => {
    setSite(e.target.innerText);
  });

  return (
    <Form onFinish={onSubmit}>
      <Select onClick={onChangeSite} value={site}>
        {siteList.map((v) => {
          return (
            <Select.Option key={v} value={v}>
              {v}
            </Select.Option>
          );
        })}
      </Select>
      <Button type="primary" htmlType="submit">
        submit
      </Button>
    </Form>
  );
};

export default SelectSite;
