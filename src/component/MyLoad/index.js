import React from "react";
import { Spin, Row, Col } from "antd";
import indexCss from "./index.module.css";

export default function MyLoad() {
  return (
    <Row justify="center" style={{ width: "100%" }}>
      <Col span={24} className={indexCss.flexCenter}>
        <Spin size="large" tip="页面加载中，请稍候..." />
      </Col>
    </Row>
  );
}
