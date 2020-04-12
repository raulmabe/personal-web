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
  );
}

export default SocialMedia;
