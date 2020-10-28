import React, { useEffect } from "react";
import classNames from "classnames";
import { Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { URL } from "url";
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
  image_backup?: string;
}

function isVideoAvailable(isVideo: boolean): boolean {
  return isVideo ? !!document.createElement("video").canPlayType : false;
}

function Mock(props: Props) {
  const { size, vertical, url, isVideo, image_backup } = props;

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
    "pb-5 pb-lg-0 mb-5 mb-lg-0": vertical,
  });

  const paddingOnMobile = classNames({
    "pb-5 pb-lg-0 mb-5 mb-lg-0": vertical,
  });

  return (
    <Row
      className={`justify-content-center align-items-center py-5 py-lg-0 ${paddingOnMobile}`}
    >
      <Col xs="auto" className={paddingOnMobile}>
        <div className={`mock-container-${size} `}>
          {isVideoAvailable(isVideo) && (
            <video autoPlay loop className={classnames}>
              <source src={url} type="video/webm" />
              {image_backup && (
                <img
                  alt="MockUp"
                  src={image_backup}
                  className={classnames}
                ></img>
              )}
            </video>
          )}{" "}
          {!isVideoAvailable(isVideo) && (
            <img alt="MockUp" src={url} className={classnames}></img>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default Mock;
