import React from "react";
import { Menu, Row, Col } from "antd";
import Link from "next/link";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>Planner</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2021">
          <Link href="/2021">
            <a>2021</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2022">
          <Link href="/2022">
            <a>2022</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row>
        <Col xs={24} md={6}>
          asdf
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <Link href="https://blog.naver.com/dlaxodud2388">
            <a target="_blank">made by Limwoochan</a>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default AppLayout;
