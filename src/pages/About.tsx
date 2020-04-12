import React from "react";
import { Row, Col } from "react-bootstrap";
import TypedAboutMe from "../components/TypedAboutMe";
import { formatDistanceStrict } from "date-fns";
import SocialMedia from "../components/SocialMedia";
import FlutterLogo from "../assets/img/flutter.svg";
import LibgdxLogo from "../assets/img/libgdx.png";
import ProfilePic from "../components/ProfilePic";

function About() {
  const myBirthday = new Date(1997, 8, 10, 2);
  const myYears = formatDistanceStrict(new Date(), myBirthday, {
    roundingMethod: "floor",
  });

  return (
    <div className="container-fluid h-100">
      <Row className="h-100 flex-grow-1 align-items-center justify-content-around mb-5 ">
        <Col xs="4" className="text-center d-none d-lg-block">
          <ProfilePic size="lg" />
          <SocialMedia />
        </Col>
        <Col xs="12" lg="8">
          <h1 className="display-1">
            About
            <TypedAboutMe strings={["Me", "Apps", "Games"]}></TypedAboutMe>
          </h1>
          <div className="d-lg-none my-2">
            <ProfilePic size="sm" />
          </div>
          <Row className="justify-content-center subtitle my-3">
            <Col xs="12" lg="auto" className="text-center">
              RAUL MATEO BENEYTO
            </Col>
            <Col
              xs="12"
              lg="auto"
              className="text-center"
            >{`${myYears} old`}</Col>
            <Col xs="12" lg="auto" className="text-center">
              SOFTWARE ENGINEERing student
            </Col>
          </Row>
          {/* <p className="subtitle">{`RAUL MATEO BENEYTO  -  ${myYears} old -  SOFTWARE ENGINEERing student`}</p> */}
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            laboriosam saepe doloremque mollitia dicta ullam accusamus corrupti
            autem et provident, ducimus, modi aspernatur suscipit explicabo
            nostrum fuga, architecto itaque voluptatem vel quia nulla deleniti
            officia atque officiis. Dolores, nulla! Quisquam, aut beatae
            cupiditate dolor ducimus culpa corrupti repudiandae! Hic vitae est
            reiciendis nemo molestias voluptas atque, fuga aperiam culpa saepe
            dolorem maiores voluptatibus fugit laborum? Rem esse consequatur sit
            sequi in illum voluptatibus delectus nihil labore impedit, corrupti
            pariatur numquam, nobis suscipit iste ab dicta quam dolore vitae non
            optio blanditiis excepturi! Eum omnis qui ducimus quisquam molestias
            praesentium illum?
          </p>
          <Row className="justify-content-center align-middle">
            <Col xs="auto">
              <img className="mx-2" height="40px" src={FlutterLogo} />
            </Col>
            <Col xs="auto">
              <img className="mx-2" height="30px" src={LibgdxLogo} />
            </Col>
          </Row>
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
