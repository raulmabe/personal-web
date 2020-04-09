import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Row, Col } from "react-bootstrap";

function SocialMedia() {
  return (
    <div className="">
      <Row className="justify-content-center">
        <Col xs="auto">
          <FontAwesomeIcon icon={faGithubAlt} size="2x" />
        </Col>
        <Col xs="auto">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </Col>
        <Col xs="auto">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto">
          <h2>{"software engineer".toUpperCase()}</h2>
        </Col>
      </Row>
    </div>
  );
}

export default SocialMedia;
