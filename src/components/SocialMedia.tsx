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
        <a
          rel="noopener noreferrer"
          href="https://github.com/Rahuvich"
          target="_blank"
          className="text-white"
        >
          <FontAwesomeIcon icon={faGithubAlt} size="2x" />
        </a>
      </Col>
      <Col xs="auto">
        <a
          rel="noopener noreferrer"
          href="https://twitter.com/raul_mabe"
          target="_blank"
          className="text-white"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </Col>
      <Col xs="auto">
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/raul-mateo-beneyto-0b2204187/"
          target="_blank"
          className="text-white"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
      </Col>
    </Row>
  );
}

export default SocialMedia;
