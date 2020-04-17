import React from "react";
import mock from "../assets/img/mock.png";
import { Row, Col } from "react-bootstrap";

function Mock(props) {
  const { size } = props;

  const url = props.url;

  return (
    <Row className="justify-content-center align-items-center">
      <Col xs="auto">
        <div className={`mock-container-${size}`}>
          <img src={url != null ? url : mock}></img>
        </div>
      </Col>
    </Row>
  );
}

export default Mock;
