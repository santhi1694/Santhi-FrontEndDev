import { Col, Row, Typography } from "antd";
import React from "react";

const Banner = () => {
  return (
    <Row className="app-banner">
      <Col>
        <div className="banner-text">
          <Typography.Title>SpaceX Capsules</Typography.Title>
          <Typography.Text>
            a React app to share SpaceX capsules data with the world.
          </Typography.Text>
        </div>
      </Col>
    </Row>
  );
};
export default Banner;
