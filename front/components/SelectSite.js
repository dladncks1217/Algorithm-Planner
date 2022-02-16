import { Button, Form, Select } from "antd";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { getSiteProblemAction } from "../actions";

const SelectSite = () => {
  const siteList = ["BOJ", "PG", "leetcode"];
  const [site, setSite] = useState("PG");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    console.log(site);
    dispatch(
      getSiteProblemAction({
        site,
      })
    );
  };

  const onChangeSite = useCallback((e) => {
    setSite(e.target.innerText);
    console.log(site);
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
