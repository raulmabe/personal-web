import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import FooterHome from "../components/FooterHome";
import DownloadCV from "../components/DownloadCV.jsx";
import { LinkContainer } from "react-router-bootstrap";
import Mock, { MockSize } from "../components/Mock";

function Home() {
  return (
    <Row className="flex-grow-1 align-items-end ">
      {/* SIDE QUOTE AND BUTTONS */}
      <Col className="align-self-center " xs="12" lg="6">
        <Row className="align-center justify-content-center">
          <Col xs="9">
            <h3>
              <blockquote className="">
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
        <Row className="mt-lg-5 pt-5 justify-content-center">
          <Col xs="12" lg="auto" className="text-center mt-2 my-lg-0">
            <LinkContainer to="/about">
              <Button variant="outline-secondary">
                {"learn about me".toUpperCase()}
              </Button>
            </LinkContainer>
          </Col>
          <Col xs="12" lg="auto" className="text-center my-1 my-lg-0">
            <i>- or -</i>
          </Col>
          <Col xs="12" lg="auto" className="text-center mb-5 my-lg-0">
            <span className="mx-3">
              <DownloadCV />
            </span>
          </Col>
        </Row>
      </Col>
      {/* MockUP */}
      <Col className="align-self-center " xs="12" lg="6">
        <Mock
          size={MockSize.LG}
          vertical={true}
          url={
            "https://res.cloudinary.com/mabe-portfolio/video/upload/v1603889628/petsworld/video.webm"
          }
          image_backup={
            "https://res.cloudinary.com/mabe-portfolio/image/upload/v1603895453/petsworld/mock.png"
          }
          isVideo={true}
        />
      </Col>

      {/* Footer */}
      <Col xs="12" className="mt-5 mb-2 pt-5 pt-lg-0">
        <FooterHome />
      </Col>
    </Row>
  );
}

export default Home;
