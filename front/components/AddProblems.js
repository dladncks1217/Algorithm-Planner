import React, { useState } from "react";
import { Form, Input, Button, Switch } from "antd";
import ProblemType from "./ProblemType";

const AddProblems = () => {
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
    >
      <Form.Item label="문제이름">
        <Input />
      </Form.Item>
      <Form.Item label="문제 타입">
        <ProblemType />
      </Form.Item>
      <Form.Item label="풀이 년도">
        <Input />
      </Form.Item>
      <Form.Item label="풀이 날짜">
        <Input />
      </Form.Item>
      <Form.Item label="정답 여부" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="복습 여부" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Button type="submit">등록 </Button>
    </Form>
  );
};

export default AddProblems;
