import React from "react";
import { Row, Col } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <Row className="justify-content-center">
    <Col xs="auto">
      <ContentLoader
        className="scale-2x"
        speed={2}
        width={780}
        height={520}
        viewBox="0 0 780 520"
        backgroundColor="#2f3640"
        foregroundColor="#353b48"
        animate={true}
        speed={1}
      >
        <circle cx="22" cy="105" r="15" />
        <rect x="53" y="198" rx="2" ry="2" width="305" height="22" />
        <rect x="54" y="228" rx="2" ry="2" width="204" height="15" />
        <circle cx="596" cy="281" r="129" />
        <rect x="19" y="114" rx="0" ry="0" width="6" height="413" />
        <rect x="55" y="262" rx="0" ry="0" width="347" height="2" />
        <rect x="58" y="285" rx="0" ry="0" width="200" height="17" />
      </ContentLoader>
    </Col>
  </Row>
);

export default MyLoader;
