import React, { useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function Mock(props) {
  const { size } = props;
  const angle = props.angle;

  var imgClass = "fadeAnimation-short ";

  if (angle != null && angle !== "undefined") imgClass += `angle-${angle}`;
  const url = props.url;



  const fadeIn = (element, duration) => {
    gsap.fromTo(element, {
      y: 80,
      opacity: 0,
    }, {
      duration: duration,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      scrollTrigger: element
    })
  }


  useEffect(
    () => {
      console.log('Starting animation');

      fadeIn('.fadeAnimation-short', 2);
    }, []
  )

  return (
    <Row className="justify-content-center align-items-center py-5">
      <Col xs="auto">
        <div className={`mock-container-${size}`}>
          <img
            alt="MockUp"
            src={
              url != null
                ? url
                : "https://res.cloudinary.com/mabe-portfolio/image/upload/v1600531040/mock.png"
            }
            className={imgClass}
          ></img>
        </div>
      </Col>
    </Row>
  );
}

export default Mock;
