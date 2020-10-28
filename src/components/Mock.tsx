import React, { useEffect } from "react";
import classNames from "classnames";
import { Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export enum MockSize {
  SM = "sm",
  LG = "lg",
}

interface Props {
  size: MockSize;
  vertical: boolean;
  url: string;
  isVideo: boolean;
}

function Mock(props: Props) {
  const { size, vertical, url, isVideo } = props;

  const fadeIn = (element, duration) => {
    gsap.fromTo(
      element,
      {
        y: 80,
        opacity: 0,
      },
      {
        duration: duration,
        opacity: 1,
        y: vertical ? -100 : 0,
        ease: "power4.out",
        scrollTrigger: element,
      }
    );
  };
  /* 
  useEffect(() => {
    fadeIn(".fadeAnimation-short", 2);
  }, []); */

  const classnames = classNames({
    "fadeAnimation-short": true,
    vertical: vertical,
    horizontal: !vertical,
    sm: size === MockSize.SM,
    lg: size === MockSize.LG,
  });

  return (
    <Row className="justify-content-center align-items-center py-5 py-lg-0">
      <Col xs="auto">
        <div className={`mock-container-${size}`}>
          {isVideo && (
            <video autoPlay loop className={classnames}>
              <source src={url} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          )}{" "}
          {!isVideo && (
            <img alt="MockUp" src={url} className={classnames}></img>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default Mock;
