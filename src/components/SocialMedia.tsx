import React from "react";
import { FaGithubAlt, FaTwitter, FaLinkedinIn } from "react-icons/fa";
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
          <FaGithubAlt className="icon-2x " />
        </a>
      </Col>
      <Col xs="auto">
        <a
          rel="noopener noreferrer"
          href="https://twitter.com/raul_mabe"
          target="_blank"
          className="text-white"
        >
          <FaTwitter className="icon-2x " />
        </a>
      </Col>
      <Col xs="auto">
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/raul-mateo-beneyto-0b2204187/"
          target="_blank"
          className="text-white"
        >
          <FaLinkedinIn className="icon-2x " />
        </a>
      </Col>
    </Row>
  );
}

export default SocialMedia;
