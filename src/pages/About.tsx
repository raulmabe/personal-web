import React from "react";
import { Row, Col } from "react-bootstrap";
import TypedAboutMe from "../components/TypedAboutMe";
import { formatDistanceStrict } from "date-fns";
import SocialMedia from "../components/SocialMedia";
import ProfilePic from "../components/ProfilePic";

function About() {
  const myBirthday = new Date(1997, 8, 10, 2);
  const myYears = formatDistanceStrict(new Date(), myBirthday, {
    roundingMethod: "floor",
  });

  return (
    <div className="container-fluid h-100">
      <Row className="justify-content-center">
        <Col xs="12" className="text-center">
          <h1 className="display-1">
            About
            <TypedAboutMe strings={["Me", "Apps", "Games"]}></TypedAboutMe>
          </h1>
        </Col>
      </Row>
      <Row className="h-75 flex-grow-1 align-items-center justify-content-around mb-5 ">
        <Col xs="4" className="text-center d-none d-lg-block">
          <ProfilePic size="lg" />
          <div className="d-block mt-4">
            <SocialMedia />
          </div>
        </Col>
        <Col xs="12" lg="7">
          <div className="d-lg-none my-2">
            <ProfilePic size="sm" />
          </div>
          <Row className="subtitle my-3">
            <Col
              xs="12"
              lg="auto"
              className="text-center"
            >{`I am Raul Mateo Beneyto,`}</Col>
          </Row>
          <Row className="subtitle-2 my-3">
            <Col
              xs="12"
              lg="auto"
              className="text-center"
            >{`Software Engineering Student`}</Col>
          </Row>
          <p className="text-justify">
            Based in Barcelona, {`${myYears} old`}, currently studying at
            Universitat Politecnica de Catalunya. <br />
            <br />I am a self-driven person who enjoys learning and creating all
            kinds of projects. I relish working as a team as it requires
            communication and dedication. I have an open mind to new ideas and
            appreaciate learning from others with more knowledge and experience.
            I am a positive person who enjoys maintaining the enthusiasm in a
            work environment.
            <br />
            <br /> My expertise is composed of different types of projects,
            although I enjoy the most developing beautiful cross platform mobile
            apps based on the user experience, using{" "}
            <a href="https://flutter.dev/">Flutter</a>. I also have developed
            some cross platform games with the help of{" "}
            <a href="https://libgdx.badlogicgames.com/">libGDX</a>.
          </p>
        </Col>
      </Row>
      <Row className="d-lg-none justify-content-center mb-5">
        <Col xs="auto" className="text-center">
          <SocialMedia />
        </Col>
      </Row>
    </div>
  );
}

export default About;
