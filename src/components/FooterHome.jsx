import React from "react";
import { Row, Col } from "react-bootstrap";
import SocialMedia from "./SocialMedia";

function FooterHome() {
  return (
    <div className="">
      <SocialMedia />
      <Row className="justify-content-center">
        <Col xs="auto">
          <h2 className="display-2">software engineer</h2>
        </Col>
      </Row>
    </div>
  );
}

export default FooterHome;
