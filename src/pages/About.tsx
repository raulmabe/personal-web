import React from "react";
import { Row, Col } from "react-bootstrap";
import TypedAboutMe from "../components/TypedAboutMe";
import ImgPerfil from "../assets/img/perfil.png";
import { formatDistanceStrict } from "date-fns";

function About() {
  const myBirthday = new Date(1997, 8, 10, 2);
  const myYears = formatDistanceStrict(new Date(), myBirthday, {
    roundingMethod: "floor",
  });

  return (
    <div>
      <Row className="justify-content-center my-4">
        <Col xs="auto">
          <div className="img-perfil">
            <img src={ImgPerfil}></img>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <TypedAboutMe
            strings={[
              `Hello! I am Raul Mateo, I am ${myYears} old.
              I am based in Barcelona, Spain. 

              
              `,
            ]}
          ></TypedAboutMe>
        </Col>
      </Row>
    </div>
  );
}

export default About;
