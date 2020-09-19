import React from "react";

import { Row, Col } from "react-bootstrap";

function Mock(props) {
  const { size } = props;

  const url = props.url;
  const angle = props.angle;

  var imgClass = "";

  if (angle != null && angle !== "undefined") imgClass += `angle-${angle}`;

  console.log(`Fetching image from ${url}`);
  return (
    <Row className="justify-content-center align-items-center">
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
