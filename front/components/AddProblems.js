import React, { useCallback, useState } from "react";
import { Form, Input, Button, Switch } from "antd";
import ProblemType from "./ProblemType";
import { useDispatch } from "react-redux";
import { addProblemAction } from "../actions";

const AddProblems = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("구현");
  const [year, setYear] = useState("");
  const [date, setDate] = useState("");
  const [isCorrect, setIsCorrect] = useState("");
  const [review, setReview] = useState("");

  const dispatch = useDispatch();

  const onSubmit = useCallback((e) => {
    console.log(name, type, year, date, isCorrect, review);
    dispatch(
      addProblemAction({
        name,
        type,
        year,
        date,
        isCorrect,
        review,
      })
    );
  });

  const onChangeName = useCallback((e) => {
    setName(e.target.value);
  });

  const onChangeType = useCallback((e) => {
    setType(e.target.innerText);
  });

  const onChangeYear = useCallback((e) => {
    setYear(e.target.value);
  });

  const onChangeDate = useCallback((e) => {
    setDate(e.target.value);
  });

  const onChangeIsCorrect = useCallback((e) => {
    setIsCorrect(e);
  });

  const onChangeReview = useCallback((e) => {
    setReview(e);
  });

  return (
    <Form
      onFinish={onSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
    >
      <Form.Item label="문제 이름 ">
        <Input onChange={onChangeName} />
      </Form.Item>
      <Form.Item label="문제 타입 ">
        <ProblemType onChangeType={onChangeType} type={type} />
      </Form.Item>
      <Form.Item label="풀이 년도 ">
        <Input onChange={onChangeYear} />
      </Form.Item>
      <Form.Item label="풀이 날짜 ">
        <Input onChange={onChangeDate} />
      </Form.Item>
      <Form.Item label="정답 여부 " valuePropName="checked">
        <Switch onChange={onChangeIsCorrect} />
      </Form.Item>
      <Form.Item label="복습 여부 " valuePropName="checked">
        <Switch onChange={onChangeReview} />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        등록
      </Button>
    </Form>
  );
};

export default AddProblems;
