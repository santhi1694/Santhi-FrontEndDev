import { Col, Row, Typography } from "antd";
import React from "react";

const Banner = () => {
  return (
    <Row className="app-banner">
      <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        <Typography.Title>Space X Capsules</Typography.Title>
        <Typography.Text>
          dummy application to list all Space X capusules
        </Typography.Text>
      </Col>
      {/* <Col xs={20} sm={16} md={12} lg={8} xl={4}>
        Col
      </Col> */}
      <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        Col
      </Col>
    </Row>
  );
};
export default Banner;
