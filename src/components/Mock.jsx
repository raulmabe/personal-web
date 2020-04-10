import React from "react";
import mock from "../assets/img/mock.png";
import { Row, Col } from "react-bootstrap";

function Mock() {
  return (
    <Row className="justify-content-center align-items-center">
      <Col xs="auto">
        <div className="mock-container">
          <img src={mock}></img>
        </div>
      </Col>
    </Row>
  );
}

export default Mock;
