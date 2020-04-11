import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import SocialMedia from "../components/SocialMedia";
import DownloadCV from "../components/DownloadCV";
import { LinkContainer } from "react-router-bootstrap";
import Mock from "../components/Mock";

function Home() {
  return (
    <Row className="flex-grow-1 align-items-end">
      {/* SIDE QUOTE AND BUTTONS */}
      <Col className="align-self-center order-1 order-md-1" xs="12" md="5">
        <Row className="align-center justify-content-center">
          <Col xs="9">
            <h3>
              <blockquote>
                {`More than not achieving my goals,\nwhat frightens me the most is to stop having them`}
              </blockquote>
            </h3>
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Col xs="4">
            <h4>{`- unsigned`}</h4>
          </Col>
        </Row>
        <Row className="mt-5 pt-5 justify-content-center">
          <Col xs="auto">
            <span className="mx-3">
              <LinkContainer to="/about">
                <Button variant="outline-secondary">
                  {"learn about me".toUpperCase()}
                </Button>
              </LinkContainer>
            </span>
            <i>- or -</i>
            <span className="mx-3">
              <DownloadCV />
            </span>
          </Col>
        </Row>
      </Col>
      {/* MockUP */}
      <Col className="align-self-center order-3 order-md-2" xs="12" md="7">
        <Mock size="lg" />
      </Col>
      <Col xs="12" className="order-2 order-md-3 mb-5">
        <SocialMedia />
      </Col>
    </Row>
  );
}

export default Home;
