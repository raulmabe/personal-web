import React from "react";
import "react-placeholder/lib/reactPlaceholder.css";
import ReactPlaceholder from "react-placeholder";
import { Row, Col } from "react-bootstrap";

const LoadingContent = () => (
  <Row className="container-fluid h-75 align-items-center justify-content-around">
    <Col xs="12" lg="6" className="text-center">
      <ReactPlaceholder
        rows={6}
        type="text"
        ready={false}
        color="#434e52"
        showLoadingAnimation
      />
      <div className="d-inline-block d-lg-none bg-info loading-img my-3">
        <ReactPlaceholder
          type="round"
          ready={false}
          color="#434e52"
          showLoadingAnimation
        />
      </div>
      <hr style={{ border: `1px solid #434e52` }} />
      <ReactPlaceholder
        rows={2}
        type="text"
        ready={false}
        color="#434e52"
        showLoadingAnimation
      />
    </Col>
    <Col xs="12" lg="4" className="text-center">
      <div className="d-none d-lg-block loading-img">
        <ReactPlaceholder
          type="round"
          ready={false}
          color="#434e52"
          showLoadingAnimation
        />
      </div>
    </Col>
  </Row>
);

export default LoadingContent;
